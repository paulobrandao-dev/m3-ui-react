import { clsx } from 'clsx';

/**
 * Props for the `Checkbox` component.
 *
 * @property {boolean} [checked] - Controlled checked state. Use with `onChange` to control externally.
 * @property {boolean} [defaultChecked] - Uncontrolled initial checked state.
 * @property {boolean} [disabled] - When true, disables the control.
 * @property {React.Ref<HTMLInputElement>} [ref] - Ref forwarded to the internal `<input type="checkbox">` element.
 */
export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  ref?: React.Ref<HTMLInputElement>;
};

/**
 * A simple checkbox control that renders an accessible native `<input type="checkbox">`
 * with a custom visual indicator. It supports both controlled (`checked`) and
 * uncontrolled (`defaultChecked`) modes and forwards most native input attributes.
 *
 * Accessibility notes:
 * - The underlying native `<input>` keeps default semantics for screen readers and keyboard navigation.
 * - Use standard labeling patterns (e.g. a surrounding `<label>` or `aria-label`) when rendering the component.
 *
 * Examples:
 * @example
 * ```tsx
 * // Uncontrolled checkbox
 * <Checkbox defaultChecked />
 * ```
 *
 * @example
 * ```tsx
 * // Controlled checkbox
 * const [checked, setChecked] = useState(false);
 * <Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />
 * ```
 *
 * @param {CheckboxProps} props - Props for the `Checkbox` component.
 * @returns {JSX.Element} Rendered checkbox element with a visual SVG indicator.
 */
export function Checkbox({
  ref,
  checked,
  defaultChecked,
  disabled,
  ...props
}: CheckboxProps) {
  return (
    <div
      className={clsx('m3-checkbox', {
        'is-checked': defaultChecked || checked,
        'is-disabled': disabled,
      })}
    >
      <input
        ref={ref}
        type="checkbox"
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      {defaultChecked || checked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          width="18px"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="m424-424-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-424ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          width="18px"
          viewBox="0 -960 960 960"
          fill="currentColor"
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z" />
        </svg>
      )}
    </div>
  );
}
