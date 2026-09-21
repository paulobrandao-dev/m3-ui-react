'use client'

import './button.scss'

export type ButtonProps<T extends React.ElementType = 'button'> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  variant?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  as?: T
  ref?: React.Ref<HTMLElement | null>
}

export const Button = <T extends React.ElementType = 'button'>({
  as,
  variant = 'text',
  size = 'sm',
  ...props
}: ButtonProps<T>) => {
  const Component = as ?? 'button'

  return (
    <Component
      data-button
      data-variant={variant}
      data-size={size}
      data-disabled={props.disabled}
      {...props}
    />
  )
}
