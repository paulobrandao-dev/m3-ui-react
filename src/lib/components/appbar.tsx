'use client'

import './appbar.scss'

export type AppbarProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  as?: T
  isScrolled?: boolean
  ref?: React.Ref<HTMLElement | null>
}

export const Appbar = <T extends React.ElementType>({
  as,
  isScrolled,
  ...props
}: AppbarProps<T>) => {
  const Component = as ?? 'header'

  return <Component data-appbar data-scrolled={isScrolled} {...props} />
}

export type AppbarRowProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  as?: T
  ref?: React.Ref<HTMLElement | null>
}

export const AppbarRow = <T extends React.ElementType>({
  as,
  ...props
}: AppbarRowProps<T>) => {
  const Component = as ?? 'div'

  return <Component data-appbar-row role='presentation' {...props} />
}

export type AppbarContentProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  variant: 'start' | 'end' | 'center'
  as?: T
  ref?: React.Ref<HTMLElement | null>
}

export const AppbarContent = <T extends React.ElementType>({
  as,
  variant,
  ...props
}: AppbarContentProps<T>) => {
  const Component = as ?? 'div'

  return (
    <Component
      data-appbar-content
      data-variant={variant}
      role='presentation'
      {...props}
    />
  )
}

export type AppbarHeadingProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  alignCenter?: boolean
  variant?: 'small' | 'medium' | 'large'
  as?: T
  ref?: React.Ref<HTMLElement | null>
}

export const AppbarHeading = <T extends React.ElementType>({
  as,
  alignCenter,
  variant = 'small',
  ...props
}: AppbarHeadingProps<T>) => {
  const Component = as ?? 'hgroup'

  return (
    <Component
      data-appbar-heading
      data-align-center={alignCenter}
      data-variant={variant}
      role='presentation'
      {...props}
    />
  )
}

export type AppbarTitleProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  as?: T
  ref?: React.Ref<HTMLElement | null>
}

export const AppbarTitle = <T extends React.ElementType>({
  as,
  ...props
}: AppbarTitleProps<T>) => {
  const Component = as ?? 'h1'

  return <Component data-appbar-title {...props} />
}

export type AppbarSubtitleProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as'
> & {
  as?: T
  ref?: React.Ref<HTMLElement | null>
}

export const AppbarSubtitle = <T extends React.ElementType>({
  as,
  ...props
}: AppbarSubtitleProps<T>) => {
  const Component = as ?? 'p'

  return <Component data-appbar-subtitle {...props} />
}
