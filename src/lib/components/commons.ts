'use client';

import { clsx } from 'clsx';
import {
  MaterialFlexboxProps,
  MaterialGapProps,
  MaterialGridProps,
  MaterialSpacingProps,
} from './types';

export function spacingClsx(prefix: string, values: MaterialSpacingProps) {
  return clsx({
    [`${prefix}__padding-${values.padding}`]: values.padding !== undefined,
    [`${prefix}__padding-block-${values.paddingBlock}`]:
      values.paddingBlock !== undefined,
    [`${prefix}__padding-block-end-${values.paddingBlockEnd}`]:
      values.paddingBlockEnd !== undefined,
    [`${prefix}__padding-block-start-${values.paddingBlockStart}`]:
      values.paddingBlockStart !== undefined,
    [`${prefix}__padding-inline-${values.paddingInline}`]:
      values.paddingInline !== undefined,
    [`${prefix}__padding-inline-end-${values.paddingInlineEnd}`]:
      values.paddingInlineEnd !== undefined,
    [`${prefix}__padding-inline-start-${values.paddingInlineStart}`]:
      values.paddingInlineStart !== undefined,
    [`${prefix}__margin-${values.margin}`]: values.margin !== undefined,
    [`${prefix}__margin-block-${values.marginBlock}`]:
      values.marginBlock !== undefined,
    [`${prefix}__margin-block-end-${values.marginBlockEnd}`]:
      values.marginBlockEnd !== undefined,
    [`${prefix}__margin-block-start-${values.marginBlockStart}`]:
      values.marginBlockStart !== undefined,
    [`${prefix}__margin-inline-${values.marginInline}`]:
      values.marginInline !== undefined,
    [`${prefix}__margin-inline-end-${values.marginInlineEnd}`]:
      values.marginInlineEnd !== undefined,
    [`${prefix}__margin-inline-start-${values.marginInlineStart}`]:
      values.marginInlineStart !== undefined,
  });
}

export function gapClsx(prefix: string, values: MaterialGapProps) {
  return clsx({
    [`${prefix}gap-${values.gap}`]: values.gap !== undefined,
    [`${prefix}row-gap-${values.rowGap}`]: values.rowGap !== undefined,
    [`${prefix}column-gap-${values.columnGap}`]: values.columnGap !== undefined,
  });
}

export function flexboxClsx(prefix: string, values: MaterialFlexboxProps) {
  return clsx(
    `${prefix}__flexbox`,
    {
      [`${prefix}__flexbox-direction-${values.direction}`]:
        values.direction !== undefined,
      [`${prefix}__flexbox-align-items-${values.alignItems}`]:
        values.alignItems !== undefined,
      [`${prefix}__flexbox-justify-content-${values.justifyContent}`]:
        values.justifyContent !== undefined,
      [`${prefix}__flexbox-align-self-${values.alignSelf}`]:
        values.alignSelf !== undefined,
      [`${prefix}__flexbox-justify-self-${values.justifySelf}`]:
        values.justifySelf !== undefined,
    },
    gapClsx(`${prefix}__flexbox-`, {
      gap: values.gap,
      columnGap: values.columnGap,
      rowGap: values.rowGap,
    }),
  );
}

export function gridClsx(prefix: string, values: MaterialGridProps) {
  return clsx(
    `${prefix}__grid`,
    {
      [`${prefix}__grid-columns-${values.columns}`]:
        values.columns !== undefined,
    },
    gapClsx(`${prefix}__grid-`, {
      gap: values.gap,
      columnGap: values.columnGap,
      rowGap: values.rowGap,
    }),
  );
}
