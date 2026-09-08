/**
 * Props for the Icon component.
 *
 * @property {string} symbol - The name of the icon symbol from the Material Symbols set.
 * @property {100 | 200 | 300 | 400 | 500 | 600 | 700} [weight=400] - The font weight of the icon.
 * @property {number} [size=24] - The size of the icon in pixels.
 * @property {boolean} [isFilled] - If `true`, the icon will be filled.
 * @property {'low' | 'normal' | 'high'} [emphasis='normal'] - The emphasis level of the icon, affecting its grade.
 * @property {React.Ref<HTMLSpanElement>} [ref] - A ref to the underlying `span` element.
 */
export type IconProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'children'
> & {
  symbol: string
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  size?: number
  isFilled?: boolean
  emphasis?: 'low' | 'normal' | 'high'
  ref?: React.Ref<HTMLSpanElement>
}
