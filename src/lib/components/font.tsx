'use client'

import './font.scss'

type MaterialTextScales =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'body-large'
  | 'body-medium'
  | 'body-small'
  | 'label-large'
  | 'label-medium'
  | 'label-small'
  | 'code'

export type FontProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as' | 'color'
> & {
  variant: MaterialTextScales
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase'
  textAlign?: 'center' | 'justify' | 'left' | 'right'
  textColor?: 'primary' | 'secondary' | 'tertiary' | 'reverse' | 'error'
  as?: T
  ref?: React.Ref<HTMLElement | null>
}

export const Font = <T extends React.ElementType>({
  as,
  variant,
  textTransform,
  textAlign,
  textColor,
  ...props
}: FontProps<T>) => {
  const Component = as ?? 'span'

  return (
    <Component
      data-font
      data-variant={variant}
      data-transform={textTransform}
      data-align={textAlign}
      data-color={textColor}
      {...props}
    />
  )
}
