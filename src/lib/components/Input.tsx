import { clsx } from 'clsx';
import { useEffect, useId, useMemo, useState } from 'react';

/**
 * Props for the `Input` component.
 *
 * @property {('outlined'|'filled')} [variant='outlined'] - Visual variant. `outlined` uses a
 *   `fieldset`/`legend` representation while `filled` uses a floating label.
 * @property {string} [label] - Visible label text shown differently depending on `variant`.
 * @property {React.ReactNode} [startNode] - Node rendered before the input (commonly an icon).
 * @property {React.ReactNode} [endNode] - Node rendered after the input (commonly an icon/button).
 * @property {boolean} [hasError] - If true, applies error styling and shows an error icon (unless disabled).
 * @property {React.ReactElement} [errorIcon] - Custom icon to render when `hasError` is true.
 * @property {boolean} [disableErrorIcon] - When true, suppresses the default or custom error icon.
 * @property {boolean} [fullWidth] - When true, applies a `has-full-width` class for styling.
 * @property {React.Ref<HTMLInputElement>} [ref] - Ref forwarded to the underlying `<input>` element.
 *
 * All other standard input attributes are forwarded (e.g. `value`, `onChange`, `placeholder`).
 */
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'outlined' | 'filled';
  label?: string;
  startNode?: React.ReactNode;
  endNode?: React.ReactNode;
  hasError?: boolean;
  errorIcon?: React.ReactElement;
  disableErrorIcon?: boolean;
  fullWidth?: boolean;
  ref?: React.Ref<HTMLInputElement>;
};

const CSS_PREFIX = 'm3-input';

/**
 * A lightweight text input component with `outlined` and `filled` variants.
 *
 * The component wraps a native `<input>` and provides label behaviour, start/end nodes
 * (for icons or buttons), error display, and a simple active-state detection.
 *
 * @example
 * ```tsx
 * // Outlined input with label
 * <Input label="Full name" placeholder="Jane Doe" />
 * ```
 *
 * @example
 * ```tsx
 * // Filled input with a start icon and required marker
 * <Input variant="filled" label="Email" required startNode={<IconMail />} />
 * ```
 *
 * @example
 * ```tsx
 * // Error state with a custom icon
 * <Input hasError errorIcon={<CustomErrorIcon />} />
 * ```
 *
 * @example
 * ```tsx
 * // Controlled input
 * const [value, setValue] = useState('');
 * <Input value={value} onChange={e => setValue(e.target.value)} label="Controlled" />
 * ```
 *
 * @param {InputProps} props - Props for the component.
 * @returns {JSX.Element} The rendered input wrapper and native input element.
 */
export function Input({
  variant = 'outlined',
  label,
  startNode,
  endNode,
  hasError,
  errorIcon,
  disableErrorIcon,
  fullWidth,
  ref,
  id,
  className,
  ...props
}: InputProps) {
  const dynamicId = useId();
  const [hasValue, setHasValue] = useState<boolean>(false);
  const inputId = useMemo(() => id ?? dynamicId, [id, dynamicId]);

  const isActive = useMemo(() => {
    if (variant === 'outlined' && startNode !== undefined) {
      return true;
    }
    return hasValue;
  }, [variant, startNode, hasValue]);

  useEffect(() => {
    const target = document.querySelector<HTMLInputElement>(`input#${inputId}`);
    if (!target) {
      return;
    }
    const observer = new MutationObserver(() => {
      setHasValue(target?.value !== undefined && target.value.length > 0);
    });
    observer.observe(target, { attributes: true, characterData: true });
    return () => {
      observer.disconnect();
    };
  }, [inputId]);

  return (
    <fieldset
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
      disabled={props.disabled}
    >
      {variant === 'outlined' && label !== undefined && (
        <legend>
          {label}
          {props.required ? '*' : ''}
        </legend>
      )}
      {startNode}
      <div role="presentation">
        {variant === 'filled' && label !== undefined && (
          <label htmlFor={inputId}>
            {label}
            {props.required ? '*' : ''}
          </label>
        )}
        <input ref={ref} id={inputId} {...props} />
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
    </fieldset>
  );
}
