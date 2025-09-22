'use client';

import { clsx } from 'clsx';
import { useMemo } from 'react';
import { Font } from './Font';

/**
 * Props for the Appbar component.
 *
 * @property {('small' | 'medium' | 'large')} [variant='small'] - The variant of the Appbar. It determines the size and layout of the component.
 * @property {React.ReactElement} [navAction] - The navigation action element, typically an `IconButton`, displayed on the left.
 * @property {React.ReactNode} [actions] - Action elements displayed on the right side of the Appbar.
 * @property {React.ReactElement} [customContent] - Custom content that can be displayed in the center of the Appbar, replacing the headline and subtitle.
 * @property {string} [headline] - The main title text of the Appbar.
 * @property {string} [subtitle] - The subtitle text displayed below the headline.
 * @property {boolean} [centeredText] - If `true`, the headline and subtitle are centered.
 * @property {boolean} [isScroll] - If `true`, applies styles for a scrolled state, affecting the Appbar's appearance.
 * @property {boolean} [isFluid] - If `true`, the Appbar's content will span the full width of its container.
 * @property {React.Ref<HTMLElement>} [ref] - A ref to the underlying `header` element.
 */
export type AppbarProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'children'
> & {
  variant?: 'small' | 'medium' | 'large';
  navAction?: React.ReactElement;
  actions?: React.ReactNode;
  customContent?: React.ReactElement;
  headline?: string;
  subtitle?: string;
  centeredText?: boolean;
  isScroll?: boolean;
  isFluid?: boolean;
  ref?: React.Ref<HTMLElement>;
};

/**
 * The `Appbar` component provides a consistent header for your application,
 * featuring navigation, titles, and actions. It can be configured with different
 * variants to suit various screen sizes and contexts.
 *
 * @example
 * ```tsx
 * import { Appbar, IconButton } from 'm3-ui-react';
 * import { Icon } from 'm3-ui-react/icon';
 *
 * export default function MyAppbar() {
 *   return (
 *     <Appbar
 *       variant="small"
 *       headline="My App"
 *       navAction={<IconButton><Icon symbol="menu" /></IconButton>}
 *       actions={<IconButton><Icon symbol="more_vert" /></IconButton>}
 *     />
 *   );
 * }
 * ```
 *
 * @param {AppbarProps} props - The props for the `Appbar` component.
 * @returns {React.ReactElement} The rendered `Appbar` component.
 */
export function Appbar({
  variant = 'small',
  navAction,
  customContent,
  actions,
  headline,
  subtitle,
  centeredText,
  isScroll,
  isFluid,
  ref,
  className,
  ...props
}: AppbarProps) {
  const textBelow = useMemo(() => variant !== 'small', [variant]);

  return (
    <header
      ref={ref}
      className={clsx(
        'm3-appbar',
        {
          'is-small': variant === 'small',
          'is-medium': variant === 'medium',
          'is-large': variant === 'large',
          'is-scroll': isScroll,
        },
        className,
      )}
      {...props}
    >
      <div role="presentation" className={clsx('row', { 'is-fluid': isFluid })}>
        {navAction}
        <div role="presentation">
          {customContent}
          {!textBelow && headline && (
            <hgroup>
              <Font
                as="h1"
                variant="title-large"
                textAlign={centeredText ? 'center' : 'left'}
              >
                {headline}
              </Font>
              {subtitle && (
                <Font
                  as="p"
                  variant="label-medium"
                  textAlign={centeredText ? 'center' : 'left'}
                >
                  {subtitle}
                </Font>
              )}
            </hgroup>
          )}
        </div>
        {actions && <div role="toolbar">{actions}</div>}
      </div>
      {textBelow && headline && (
        <hgroup className={clsx('row', { 'is-fluid': isFluid })}>
          <Font
            as="h1"
            variant={variant === 'medium' ? 'headline-medium' : 'display-small'}
            textAlign={centeredText ? 'center' : 'left'}
          >
            {headline}
          </Font>
          {subtitle && (
            <Font
              as="p"
              variant={variant === 'medium' ? 'label-large' : 'title-medium'}
              textAlign={centeredText ? 'center' : 'left'}
            >
              {subtitle}
            </Font>
          )}
        </hgroup>
      )}
    </header>
  );
}
