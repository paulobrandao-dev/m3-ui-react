'use client';

import { clsx } from 'clsx';
import {
  MaterialFlexboxProps,
  MaterialGapProps,
  MaterialGridProps,
  MaterialSpacingProps,
} from './types';

export function spacingClsx(values: MaterialSpacingProps) {
  return clsx({
    [`padding-${values.padding}`]: values.padding !== undefined,
    [`padding-block-${values.paddingBlock}`]: values.paddingBlock !== undefined,
    [`padding-block-end-${values.paddingBlockEnd}`]:
      values.paddingBlockEnd !== undefined,
    [`padding-block-start-${values.paddingBlockStart}`]:
      values.paddingBlockStart !== undefined,
    [`padding-inline-${values.paddingInline}`]:
      values.paddingInline !== undefined,
    [`padding-inline-end-${values.paddingInlineEnd}`]:
      values.paddingInlineEnd !== undefined,
    [`padding-inline-start-${values.paddingInlineStart}`]:
      values.paddingInlineStart !== undefined,
    [`margin-${values.margin}`]: values.margin !== undefined,
    [`margin-block-${values.marginBlock}`]: values.marginBlock !== undefined,
    [`margin-block-end-${values.marginBlockEnd}`]:
      values.marginBlockEnd !== undefined,
    [`margin-block-start-${values.marginBlockStart}`]:
      values.marginBlockStart !== undefined,
    [`margin-inline-${values.marginInline}`]: values.marginInline !== undefined,
    [`margin-inline-end-${values.marginInlineEnd}`]:
      values.marginInlineEnd !== undefined,
    [`margin-inline-start-${values.marginInlineStart}`]:
      values.marginInlineStart !== undefined,
  });
}

export function gapClsx(values: MaterialGapProps, prefix?: string) {
  return clsx({
    [`${prefix ? prefix + '-' : ''}gap-${values.gap}`]:
      values.gap !== undefined,
    [`${prefix ? prefix + '-' : ''}row-gap-${values.rowGap}`]:
      values.rowGap !== undefined,
    [`${prefix ? prefix + '-' : ''}column-gap-${values.columnGap}`]:
      values.columnGap !== undefined,
  });
}

export function flexboxClsx(values: MaterialFlexboxProps) {
  return clsx(
    'is-flexbox',
    {
      [`flex-direction-${values.direction}`]: values.direction !== undefined,
      [`flex-align-items-${values.alignItems}`]:
        values.alignItems !== undefined,
      [`flex-justify-content-${values.justifyContent}`]:
        values.justifyContent !== undefined,
      [`flex-align-self-${values.alignSelf}`]: values.alignSelf !== undefined,
      [`flex-justify-self-${values.justifySelf}`]:
        values.justifySelf !== undefined,
      [`flex-wrap-${values.wrap}`]: values.wrap !== undefined,
    },
    gapClsx(
      {
        gap: values.gap,
        columnGap: values.columnGap,
        rowGap: values.rowGap,
      },
      'flex',
    ),
  );
}

export function gridClsx(values: MaterialGridProps) {
  return clsx(
    `is-grid`,
    {
      [`grid-columns-${values.columns}`]: values.columns !== undefined,
    },
    gapClsx(
      {
        gap: values.gap,
        columnGap: values.columnGap,
        rowGap: values.rowGap,
      },
      'grid',
    ),
  );
}
