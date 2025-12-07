import { clsx } from 'clsx';
import { Font } from './Font';

/**
 * Props for the `Chip` component.
 *
 * @property {string} label - The text label displayed inside the chip.
 * @property {boolean} [isSelected] - If true, the chip will report `aria-pressed` and show selected styling.
 * @property {boolean} [isElevated] - If true, applies an elevated visual style to the chip.
 * @property {React.ReactNode} [startNode] - Node rendered before the label (commonly an icon).
 * @property {React.ReactNode} [endNode] - Node rendered after the label (commonly a remove icon).
 * @property {React.Ref<HTMLButtonElement>} [ref] - Ref forwarded to the underlying `button` element.
 */
export type ChipProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'type' | 'aria-pressed'
> & {
  label: string;
  isSelected?: boolean;
  isElevated?: boolean;
  startNode?: React.ReactNode;
  endNode?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
};

/**
 * The `Chip` component represents a compact, interactive element commonly used for
 * selections, tags, or filters. It renders as a `button` and can optionally display
 * leading/trailing nodes (icons), selection state and elevated styling.
 *
 * @example
 * ```tsx
 * <Chip label="Example" />
 * ```
 *
 * @example
 * ```tsx
 * <Chip
 *   label="Selected"
 *   isSelected
 *   isElevated
 *   startNode={<IconTag />}
 *   endNode={<IconClose />}
 *   onClick={() => console.log('clicked')}
 * />
 * ```
 *
 * @param {ChipProps} props - Props for the `Chip` component.
 * @returns {JSX.Element} The rendered chip button.
 */
export function Chip({
  label,
  isSelected,
  isElevated,
  startNode,
  endNode,
  ref,
  className,
  ...props
}: ChipProps) {
  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={isSelected ? 'true' : undefined}
      className={clsx('m3-chip', { 'is-elevated': isElevated }, className)}
      {...props}
    >
      {startNode}
      <Font as="span" variant="label-large" spacing={{ paddingInline: 'sm' }}>
        {label}
      </Font>
      {endNode}
    </button>
  );
}
