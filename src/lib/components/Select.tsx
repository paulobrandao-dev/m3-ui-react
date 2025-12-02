import { clsx } from 'clsx';
import {
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { usePopoverControl } from '../hooks/usePopoverControl';
import { Checkbox } from './Checkbox';
import { Chip } from './Chip';
import { Font } from './Font';
import { ListItem } from './ListItem';
import { Menu } from './Menu';

/**
 * Props for the `Select` component.
 *
 * @property {('outlined'|'filled')} [variant='outlined'] - Visual variant. `outlined` uses a
 *   `fieldset`/`legend` while `filled` shows a floating label.
 * @property {string} [label] - Label text displayed with the select.
 * @property {Array<{label: string; value: string|number}>} [options] - Available options to choose from.
 * @property {string|number|Array<string|number>} [value] - Current value or array of values (when `multiple`).
 * @property {React.ReactNode} [startNode] - Node rendered before the control (commonly an icon).
 * @property {React.ReactNode} [endNode] - Node rendered after the control.
 * @property {boolean} [hasError] - Shows error visual state when true.
 * @property {React.ReactElement} [errorIcon] - Custom icon to render for the error state.
 * @property {boolean} [disableErrorIcon] - When true, suppresses the default/custom error icon.
 * @property {boolean} [fullWidth] - When true, applies `has-full-width` class for styling.
 * @property {React.ReactElement} [dropdownIcon] - Custom dropdown icon to show at the end of the control.
 * @property {React.Ref<Partial<HTMLSelectElement>>} [ref] - Imperative ref to expose a `.value` property.
 * @property {boolean} [multiple] - When true, allows multiple selection and renders `Chip`s for selected options.
 * @property {React.ReactElement} [removeChipIcon] - Custom icon shown on chips to remove a selected value.
 * @property {boolean} [required] - Shows required indicator when true.
 * @property {(value?: string|number|Array<string|number>) => void} [onChange] - Callback called when selection changes.
 *
 * All other standard `fieldset` attributes are forwarded to the outer element.
 */
export type SelectProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  variant?: 'outlined' | 'filled';
  label?: string;
  options?: Array<{ label: string; value: string | number }>;
  value?: string | number | Array<string | number>;
  startNode?: React.ReactNode;
  endNode?: React.ReactNode;
  hasError?: boolean;
  errorIcon?: React.ReactElement;
  disableErrorIcon?: boolean;
  fullWidth?: boolean;
  dropdownIcon?: React.ReactElement;
  ref?: React.Ref<Partial<HTMLSelectElement>>;
  multiple?: boolean;
  removeChipIcon?: React.ReactElement;
  required?: boolean;
  onChange?: (value?: string | number | Array<string | number>) => void;
};

const CSS_PREFIX = 'm3-select';

export function Select({
  variant = 'outlined',
  label,
  options,
  startNode,
  endNode,
  hasError,
  errorIcon,
  disableErrorIcon,
  fullWidth,
  dropdownIcon,
  ref,
  value,
  multiple,
  removeChipIcon,
  required,
  id,
  className,
  disabled,
  onChange,
  ...props
}: SelectProps) {
  /**
   * A rich select / combobox component supporting single and multiple selection.
   *
   * The component renders as a semantic `fieldset` with `role="combobox"` and toggles a
   * `Menu` used as a `listbox`. For `multiple` mode selected values are shown as `Chip`s.
   *
   * Accessibility notes:
   * - The outer element uses `role="combobox"`, `aria-controls` and `aria-expanded` to
   *   coordinate with the internal `Menu` (`role="listbox"`).
   * - In `multiple` mode the `Menu` will set `aria-multiselectable="true"` and each
   *   option uses `role="option"` with `aria-selected`.
   *
   * Class name / styling conventions:
   * - `CSS_PREFIX` is `m3-select` and the runtime classes include `m3-select-outlined` or
   *   `m3-select-filled`. Modifiers added: `is-active`, `has-label`, `has-error`, `has-full-width`.
   *
   * Examples:
   * @example
   * ```tsx
   * // Basic single select
   * <Select
   *   label="Choose an item"
   *   options={[{label: 'One', value: 1}, {label: 'Two', value: 2}]}
   *   onChange={value => console.log(value)}
   * />
   * ```
   *
   * @example
   * ```tsx
   * // Multiple select with chips
   * <Select
   *   multiple
   *   label="Tags"
   *   options={[{label: 'Red', value: 'red'}, {label: 'Blue', value: 'blue'}]}
   *   onChange={values => console.log(values)}
   * />
   * ```
   *
   * @example
   * ```tsx
   * // Controlled select
   * const [value, setValue] = useState<number | undefined>(2);
   * <Select value={value} onChange={v => setValue(v as number)} options={[{label: 'One', value:1},{label:'Two', value:2}]} />
   * ```
   *
   * @param {SelectProps} props - Props for the `Select` component.
   * @returns {JSX.Element} The rendered combobox and its `Menu` listbox.
   */
  const dynamicId = useId();
  const media = useMediaQuery();
  const [selectedValue, setSelectedValue] = useState<Array<string | number>>();
  const [menuPosition, setMenuPosition] = useState<React.CSSProperties>();
  const comboboxId = useMemo(() => id ?? dynamicId, [id, dynamicId]);
  const popoverId = `${comboboxId}_listbox`;
  const labelId = `${comboboxId}_label`;
  const { showPopover, hidePopover } = usePopoverControl(popoverId);

  const isActive = useMemo(() => {
    if (variant === 'outlined' && startNode !== undefined) {
      return true;
    }
    return selectedValue !== undefined && selectedValue.length > 0;
  }, [variant, startNode, selectedValue]);

  const getMenuPosition = useCallback((): React.CSSProperties => {
    if (media.isLessThanMedium) return {};
    const anchor = document.getElementById(comboboxId);
    if (!anchor) return {};
    const coords = anchor.getBoundingClientRect();
    const screenHeightQuarter = media.height / 4;
    const atTop = coords.bottom < screenHeightQuarter;
    const atBottom = coords.top > screenHeightQuarter * 3;
    const width = coords.width;
    if (atTop) {
      return {
        width,
        marginInline: `${coords.left}px auto`,
        marginBlock: `${coords.top}px auto`,
        transformOrigin: 'top center',
      };
    }
    if (atBottom) {
      return {
        width,
        marginInline: `${coords.left}px auto`,
        marginBlock: `auto ${media.height - coords.bottom}px`,
        transformOrigin: 'bottom center',
      };
    }
    const optionsLenght = options && options.length < 6 ? options.length : 6.5;
    const menuHeight = 16 + optionsLenght * 56;
    return {
      width,
      marginInline: `${coords.left}px auto`,
      marginBlock: `${Math.round(coords.top - (menuHeight - coords.height) / 2)}px auto`,
      transformOrigin: 'center',
    };
  }, [media.height, media.isLessThanMedium, options, comboboxId]);

  const openMenu = useCallback(() => {
    setMenuPosition(getMenuPosition());
    showPopover();
    document.getElementById(popoverId)?.focus();
  }, [getMenuPosition, popoverId, showPopover]);

  const handleMultipleSelect = useCallback(
    (value: string | number) => {
      const isSelected = selectedValue?.includes(value);
      const copy = [...(selectedValue || [])];
      if (isSelected) {
        const decrease = copy.filter(entry => entry !== value);
        setSelectedValue(decrease);
        return decrease;
      } else {
        const add = [...copy, value];
        const increase = options
          ?.filter(entry => add.includes(entry.value))
          .map(entry => entry.value);
        setSelectedValue(increase);
        return increase;
      }
    },
    [options, selectedValue],
  );

  const handleSelect = useCallback(
    (value: string | number) => {
      if (multiple) {
        const result = handleMultipleSelect(value);
        if (onChange) onChange(result);
      } else {
        setSelectedValue([value]);
        if (onChange) onChange(value);
        hidePopover();
      }
    },
    [handleMultipleSelect, hidePopover, multiple, onChange],
  );

  useImperativeHandle(ref, () => {
    if (!selectedValue) return { value: undefined };
    if (multiple) return { value: JSON.stringify(selectedValue) };
    return { value: selectedValue[0].toString() };
  }, [multiple, selectedValue]);

  useEffect(() => {
    if (Array.isArray(value) || value === undefined) {
      setSelectedValue(value);
    } else {
      setSelectedValue([value]);
    }
  }, [value]);

  return (
    <fieldset
      role="combobox"
      aria-expanded="false"
      aria-labelledby={label !== undefined ? labelId : undefined}
      aria-controls={popoverId}
      className={clsx(
        `${CSS_PREFIX}-${variant}`,
        {
          'is-active': isActive,
          'has-label': variant === 'outlined' && label !== undefined,
          'has-error': hasError,
          'has-full-width': fullWidth,
        },
        className,
      )}
      id={comboboxId}
      disabled={disabled}
      onClick={openMenu}
      onKeyDown={e => {
        if (document.activeElement === e.currentTarget && e.code === 'Space') {
          openMenu();
        }
      }}
      tabIndex={0}
      {...props}
    >
      {variant === 'outlined' && label !== undefined && (
        <legend id={labelId}>
          {label}
          {required ? '*' : ''}
        </legend>
      )}
      {startNode}
      <div role="presentation">
        {variant === 'filled' && label !== undefined && (
          <label id={labelId}>
            {label}
            {required ? '*' : ''}
          </label>
        )}
        {multiple ? (
          <Font
            variant="body-large"
            as="div"
            textAlign="left"
            ref={instance => {
              if (instance) {
                instance.style.width = `${instance.getBoundingClientRect().width}px`;
              }
            }}
          >
            {options
              ?.filter(option => selectedValue?.includes(option.value))
              .map(entry => (
                <Chip
                  label={entry.label}
                  onClick={e => {
                    e.stopPropagation();
                    handleSelect(entry.value);
                  }}
                  endNode={
                    removeChipIcon ?? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 -960 960 960"
                        width="18px"
                        fill="currentColor"
                      >
                        <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
                      </svg>
                    )
                  }
                />
              ))}
          </Font>
        ) : (
          <input
            readOnly
            value={
              options
                ?.filter(option => selectedValue?.includes(option.value))
                .map(entry => entry.label)[0]
            }
          />
        )}
      </div>
      {hasError && !disableErrorIcon && (
        <>
          {errorIcon ?? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 -960 960 960"
              className="has-error-icon"
            >
              <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
            </svg>
          )}
        </>
      )}
      {endNode}
      {dropdownIcon ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 -960 960 960"
          className="dropdown-icon"
        >
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
      )}
      <Menu
        role="listbox"
        id={popoverId}
        tabIndex={0}
        aria-multiselectable={multiple ? 'true' : 'false'}
        onToggle={e => {
          const combobox = document.getElementById(comboboxId);
          combobox?.setAttribute(
            'aria-expanded',
            e.newState === 'open' ? 'true' : 'false',
          );
        }}
        onFocus={e => {
          if (
            document.activeElement !== e.currentTarget ||
            !options ||
            !selectedValue?.length
          ) {
            return;
          }
          const firstSelectedOption = options.findIndex(
            option => option.value === selectedValue[0],
          );
          if (firstSelectedOption > -1) {
            e.currentTarget
              .querySelector<HTMLLIElement>(
                `li[data-index="${firstSelectedOption}"]`,
              )
              ?.focus();
          }
        }}
        onKeyDown={e => {
          const items = Array.from(e.currentTarget.children) as HTMLElement[];
          if (!e.currentTarget.contains(document.activeElement)) return;
          const index = Number(e.currentTarget.dataset.activeOption || '-1');
          if (e.key === 'ArrowUp' && index > 0) {
            e.preventDefault();
            const prevItem = items[index - 1];
            prevItem?.focus();
          } else if (e.key === 'ArrowDown' && index < items.length - 1) {
            e.preventDefault();
            const nextItem = items[index + 1];
            nextItem?.focus();
          } else if (e.key === 'Enter') {
            const item = items[index];
            item.click();
          }
        }}
        style={menuPosition}
      >
        {options?.map((option, index) => {
          const isSelected = selectedValue?.includes(option.value);
          return (
            <ListItem
              key={`${option.value}_${option.label}`}
              role="option"
              tabIndex={index + 1}
              data-index={index}
              headline={option.label}
              onClick={e => {
                e.stopPropagation();
                handleSelect(option.value);
              }}
              onFocus={e => {
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.dataset.activeOption = index.toString();
                }
              }}
              isSelected={!multiple && isSelected}
              aria-selected={isSelected ? 'true' : 'false'}
              startElement={
                multiple ? <Checkbox defaultChecked={isSelected} /> : undefined
              }
            />
          );
        })}
      </Menu>
    </fieldset>
  );
}
