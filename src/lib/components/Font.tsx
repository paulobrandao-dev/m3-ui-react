import { clsx } from 'clsx';
import { flexboxClsx, spacingClsx } from './commons';
import type {
  MaterialFlexboxProps,
  MaterialSpacingProps,
  MaterialTextScales,
} from './types';

export type FontProps<E extends React.ElementType> =
  React.HTMLAttributes<HTMLElement> & {
    scale: MaterialTextScales;
    as?: E;
    textAlign?: 'center' | 'justify' | 'left' | 'right';
    textTransform?: 'capitalize' | 'lowercase' | 'uppercase';
    ref?: React.Ref<HTMLElement>;
    spacing?: MaterialSpacingProps;
    flexbox?: MaterialFlexboxProps;
    textColor?: 'primary' | 'secondary' | 'tertiary' | 'reverse' | 'error';
  };

const CSS_PREFIX = 'rm-font';

export function Font<E extends React.ElementType>({
  scale,
  as,
  textAlign,
  textTransform,
  textColor,
  spacing,
  flexbox,
  ref,
  className,
  ...props
}: FontProps<E> & Omit<React.ComponentPropsWithoutRef<E>, keyof FontProps<E>>) {
  const Surface = as ?? 'span';

  return (
    <Surface
      ref={ref}
      className={clsx(
        `${CSS_PREFIX}__${scale}`,
        {
          [`${CSS_PREFIX}__align-${textAlign}`]: textAlign !== undefined,
          [`${CSS_PREFIX}__transform-${textTransform}`]:
            textTransform !== undefined,
          [`${CSS_PREFIX}__color-${textColor}`]: textColor !== undefined,
        },
        spacing !== undefined ? spacingClsx(CSS_PREFIX, spacing) : undefined,
        flexbox !== undefined ? flexboxClsx(CSS_PREFIX, flexbox) : undefined,
        className,
      )}
      {...props}
    />
  );
}
