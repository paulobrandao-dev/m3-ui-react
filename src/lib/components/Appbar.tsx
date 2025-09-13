'use client';

import { clsx } from 'clsx';
import { useMemo } from 'react';
import { Font } from './Font';

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
      <div
        role="presentation"
        className={clsx('toolbar-row', { 'is-fluid': isFluid })}
      >
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
        <hgroup className={clsx('toolbar-row', { 'is-fluid': isFluid })}>
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
