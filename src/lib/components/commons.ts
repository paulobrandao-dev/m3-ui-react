'use client';

import { clsx } from 'clsx';
import {
  AttributeQueries,
  DisplayValues,
  FlexAlignProps,
  GapProps,
  GridColumnSize,
  MaterialFlexboxProps,
  MaterialGapProps,
  MaterialGridProps,
  MaterialSpacingProps,
  SpacingProps,
  TextScales,
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

export function displayClassNames(
  display?: DisplayValues | AttributeQueries<DisplayValues>,
) {
  return clsx({
    [`display-compact-${typeof display === 'string' ? display : display?.compact}`]:
      display !== undefined,
    [`display-medium-${typeof display !== 'string' ? display?.medium : ''}`]:
      typeof display !== 'string' && display?.medium !== undefined,
    [`display-expanded-${typeof display !== 'string' ? display?.expanded : ''}`]:
      typeof display !== 'string' && display?.expanded !== undefined,
    [`display-large-${typeof display !== 'string' ? display?.large : ''}`]:
      typeof display !== 'string' && display?.large !== undefined,
    [`display-xlarge-${typeof display !== 'string' ? display?.xlarge : ''}`]:
      typeof display !== 'string' && display?.xlarge !== undefined,
  });
}

export function flexClassNames({
  flexDirection,
  alignItems,
  justifyContent,
}: FlexAlignProps) {
  return clsx({
    [`flex-direction-compact-${typeof flexDirection === 'string' ? flexDirection : flexDirection?.compact}`]:
      flexDirection !== undefined,
    [`flex-direction-medium-${typeof flexDirection !== 'string' ? flexDirection?.medium : ''}`]:
      typeof flexDirection !== 'string' && flexDirection?.medium !== undefined,
    [`flex-direction-expanded-${typeof flexDirection !== 'string' ? flexDirection?.expanded : ''}`]:
      typeof flexDirection !== 'string' &&
      flexDirection?.expanded !== undefined,
    [`flex-direction-large-${typeof flexDirection !== 'string' ? flexDirection?.large : ''}`]:
      typeof flexDirection !== 'string' && flexDirection?.large !== undefined,
    [`flex-direction-xlarge-${typeof flexDirection !== 'string' ? flexDirection?.xlarge : ''}`]:
      typeof flexDirection !== 'string' && flexDirection?.xlarge !== undefined,
    [`flex-align-items-compact-${typeof alignItems === 'string' ? alignItems : alignItems?.compact}`]:
      alignItems !== undefined,
    [`flex-align-items-medium-${typeof alignItems !== 'string' ? alignItems?.medium : ''}`]:
      typeof alignItems !== 'string' && alignItems?.medium !== undefined,
    [`flex-align-items-expanded-${typeof alignItems !== 'string' ? alignItems?.expanded : ''}`]:
      typeof alignItems !== 'string' && alignItems?.expanded !== undefined,
    [`flex-align-items-large-${typeof alignItems !== 'string' ? alignItems?.large : ''}`]:
      typeof alignItems !== 'string' && alignItems?.large !== undefined,
    [`flex-align-items-xlarge-${typeof alignItems !== 'string' ? alignItems?.xlarge : ''}`]:
      typeof alignItems !== 'string' && alignItems?.xlarge !== undefined,
    [`flex-justify-content-compact-${typeof justifyContent === 'string' ? justifyContent : justifyContent?.compact}`]:
      justifyContent !== undefined,
    [`flex-justify-content-medium-${typeof justifyContent !== 'string' ? justifyContent?.medium : ''}`]:
      typeof justifyContent !== 'string' &&
      justifyContent?.medium !== undefined,
    [`flex-justify-content-expanded-${typeof justifyContent !== 'string' ? justifyContent?.expanded : ''}`]:
      typeof justifyContent !== 'string' &&
      justifyContent?.expanded !== undefined,
    [`flex-justify-content-large-${typeof justifyContent !== 'string' ? justifyContent?.large : ''}`]:
      typeof justifyContent !== 'string' && justifyContent?.large !== undefined,
    [`flex-justify-content-xlarge-${typeof justifyContent !== 'string' ? justifyContent?.xlarge : ''}`]:
      typeof justifyContent !== 'string' &&
      justifyContent?.xlarge !== undefined,
  });
}

export function spacingClassNames({
  margin,
  marginBlock,
  marginInline,
  padding,
  paddingBlock,
  paddingInline,
}: SpacingProps) {
  return clsx({
    [`padding-compact-${typeof padding === 'string' ? padding : padding?.compact}`]:
      padding !== undefined,
    [`padding-medium-${typeof padding !== 'string' ? padding?.medium : ''}`]:
      typeof padding !== 'string' && padding?.medium !== undefined,
    [`padding-expanded-${typeof padding !== 'string' ? padding?.expanded : ''}`]:
      typeof padding !== 'string' && padding?.expanded !== undefined,
    [`padding-large-${typeof padding !== 'string' ? padding?.large : ''}`]:
      typeof padding !== 'string' && padding?.large !== undefined,
    [`padding-xlarge-${typeof padding !== 'string' ? padding?.xlarge : ''}`]:
      typeof padding !== 'string' && padding?.xlarge !== undefined,
    [`padding-block-compact-${typeof paddingBlock === 'string' ? paddingBlock : paddingBlock?.compact}`]:
      paddingBlock !== undefined,
    [`padding-block-medium-${typeof paddingBlock !== 'string' ? paddingBlock?.medium : ''}`]:
      typeof paddingBlock !== 'string' && paddingBlock?.medium !== undefined,
    [`padding-block-expanded-${typeof paddingBlock !== 'string' ? paddingBlock?.expanded : ''}`]:
      typeof paddingBlock !== 'string' && paddingBlock?.expanded !== undefined,
    [`padding-block-large-${typeof paddingBlock !== 'string' ? paddingBlock?.large : ''}`]:
      typeof paddingBlock !== 'string' && paddingBlock?.large !== undefined,
    [`padding-block-xlarge-${typeof paddingBlock !== 'string' ? paddingBlock?.xlarge : ''}`]:
      typeof paddingBlock !== 'string' && paddingBlock?.xlarge !== undefined,
    [`padding-inline-compact-${typeof paddingInline === 'string' ? paddingInline : paddingInline?.compact}`]:
      paddingInline !== undefined,
    [`padding-inline-medium-${typeof paddingInline !== 'string' ? paddingInline?.medium : ''}`]:
      typeof paddingInline !== 'string' && paddingInline?.medium !== undefined,
    [`padding-inline-expanded-${typeof paddingInline !== 'string' ? paddingInline?.expanded : ''}`]:
      typeof paddingInline !== 'string' &&
      paddingInline?.expanded !== undefined,
    [`padding-inline-large-${typeof paddingInline !== 'string' ? paddingInline?.large : ''}`]:
      typeof paddingInline !== 'string' && paddingInline?.large !== undefined,
    [`padding-inline-xlarge-${typeof paddingInline !== 'string' ? paddingInline?.xlarge : ''}`]:
      typeof paddingInline !== 'string' && paddingInline?.xlarge !== undefined,
    [`margin-compact-${typeof margin === 'string' ? margin : margin?.compact}`]:
      margin !== undefined,
    [`margin-medium-${typeof margin !== 'string' ? margin?.medium : ''}`]:
      typeof margin !== 'string' && margin?.medium !== undefined,
    [`margin-expanded-${typeof margin !== 'string' ? margin?.expanded : ''}`]:
      typeof margin !== 'string' && margin?.expanded !== undefined,
    [`margin-large-${typeof margin !== 'string' ? margin?.large : ''}`]:
      typeof margin !== 'string' && margin?.large !== undefined,
    [`margin-xlarge-${typeof margin !== 'string' ? margin?.xlarge : ''}`]:
      typeof margin !== 'string' && margin?.xlarge !== undefined,
    [`margin-block-compact-${typeof marginBlock === 'string' ? marginBlock : marginBlock?.compact}`]:
      marginBlock !== undefined,
    [`margin-block-medium-${typeof marginBlock !== 'string' ? marginBlock?.medium : ''}`]:
      typeof marginBlock !== 'string' && marginBlock?.medium !== undefined,
    [`margin-block-expanded-${typeof marginBlock !== 'string' ? marginBlock?.expanded : ''}`]:
      typeof marginBlock !== 'string' && marginBlock?.expanded !== undefined,
    [`margin-block-large-${typeof marginBlock !== 'string' ? marginBlock?.large : ''}`]:
      typeof marginBlock !== 'string' && marginBlock?.large !== undefined,
    [`margin-block-xlarge-${typeof marginBlock !== 'string' ? marginBlock?.xlarge : ''}`]:
      typeof marginBlock !== 'string' && marginBlock?.xlarge !== undefined,
    [`margin-inline-compact-${typeof marginInline === 'string' ? marginInline : marginInline?.compact}`]:
      marginInline !== undefined,
    [`margin-inline-medium-${typeof marginInline !== 'string' ? marginInline?.medium : ''}`]:
      typeof marginInline !== 'string' && marginInline?.medium !== undefined,
    [`margin-inline-expanded-${typeof marginInline !== 'string' ? marginInline?.expanded : ''}`]:
      typeof marginInline !== 'string' && marginInline?.expanded !== undefined,
    [`margin-inline-large-${typeof marginInline !== 'string' ? marginInline?.large : ''}`]:
      typeof marginInline !== 'string' && marginInline?.large !== undefined,
    [`margin-inline-xlarge-${typeof marginInline !== 'string' ? marginInline?.xlarge : ''}`]:
      typeof marginInline !== 'string' && marginInline?.xlarge !== undefined,
  });
}

export function gapClassNames({ gap, gapColumn, gapRow }: GapProps) {
  return clsx({
    [`gap-compact-${typeof gap === 'string' ? gap : gap?.compact}`]:
      gap !== undefined,
    [`gap-medium-${typeof gap !== 'string' ? gap?.medium : ''}`]:
      typeof gap !== 'string' && gap?.medium !== undefined,
    [`gap-expanded-${typeof gap !== 'string' ? gap?.expanded : ''}`]:
      typeof gap !== 'string' && gap?.expanded !== undefined,
    [`gap-large-${typeof gap !== 'string' ? gap?.large : ''}`]:
      typeof gap !== 'string' && gap?.large !== undefined,
    [`gap-xlarge-${typeof gap !== 'string' ? gap?.xlarge : ''}`]:
      typeof gap !== 'string' && gap?.xlarge !== undefined,
    [`column-gap-compact-${typeof gapColumn === 'string' ? gapColumn : gapColumn?.compact}`]:
      gapColumn !== undefined,
    [`column-gap-medium-${typeof gapColumn !== 'string' ? gapColumn?.medium : ''}`]:
      typeof gapColumn !== 'string' && gapColumn?.medium !== undefined,
    [`column-gap-expanded-${typeof gapColumn !== 'string' ? gapColumn?.expanded : ''}`]:
      typeof gapColumn !== 'string' && gapColumn?.expanded !== undefined,
    [`column-gap-large-${typeof gapColumn !== 'string' ? gapColumn?.large : ''}`]:
      typeof gapColumn !== 'string' && gapColumn?.large !== undefined,
    [`column-gap-xlarge-${typeof gapColumn !== 'string' ? gapColumn?.xlarge : ''}`]:
      typeof gapColumn !== 'string' && gapColumn?.xlarge !== undefined,
    [`row-gap-compact-${typeof gapRow === 'string' ? gapRow : gapRow?.compact}`]:
      gapRow !== undefined,
    [`row-gap-medium-${typeof gapRow !== 'string' ? gapRow?.medium : ''}`]:
      typeof gapRow !== 'string' && gapRow?.medium !== undefined,
    [`row-gap-expanded-${typeof gapRow !== 'string' ? gapRow?.expanded : ''}`]:
      typeof gapRow !== 'string' && gapRow?.expanded !== undefined,
    [`row-gap-large-${typeof gapRow !== 'string' ? gapRow?.large : ''}`]:
      typeof gapRow !== 'string' && gapRow?.large !== undefined,
    [`row-gap-xlarge-${typeof gapRow !== 'string' ? gapRow?.xlarge : ''}`]:
      typeof gapRow !== 'string' && gapRow?.xlarge !== undefined,
  });
}

export function fontScaleClassNames(
  fontScale?: TextScales | AttributeQueries<TextScales>,
) {
  return clsx({
    [`text-compact-${typeof fontScale === 'string' ? fontScale : fontScale?.compact}`]:
      fontScale !== undefined,
    [`text-medium-${typeof fontScale !== 'string' ? fontScale?.medium : ''}`]:
      typeof fontScale !== 'string' && fontScale?.medium !== undefined,
    [`text-expanded-${typeof fontScale !== 'string' ? fontScale?.expanded : ''}`]:
      typeof fontScale !== 'string' && fontScale?.expanded !== undefined,
    [`text-large-${typeof fontScale !== 'string' ? fontScale?.large : ''}`]:
      typeof fontScale !== 'string' && fontScale?.large !== undefined,
    [`text-xlarge-${typeof fontScale !== 'string' ? fontScale?.xlarge : ''}`]:
      typeof fontScale !== 'string' && fontScale?.xlarge !== undefined,
  });
}

export function gridColumnsClassNames(
  gridColumns?: GridColumnSize | AttributeQueries<GridColumnSize>,
) {
  return clsx({
    [`grid-compact-${typeof gridColumns === 'number' ? gridColumns : gridColumns?.compact}`]:
      gridColumns !== undefined,
    [`grid-medium-${typeof gridColumns !== 'number' ? gridColumns?.medium : ''}`]:
      typeof gridColumns !== 'number' && gridColumns?.medium !== undefined,
    [`grid-expanded-${typeof gridColumns !== 'number' ? gridColumns?.expanded : ''}`]:
      typeof gridColumns !== 'number' && gridColumns?.expanded !== undefined,
    [`grid-large-${typeof gridColumns !== 'number' ? gridColumns?.large : ''}`]:
      typeof gridColumns !== 'number' && gridColumns?.large !== undefined,
    [`grid-xlarge-${typeof gridColumns !== 'number' ? gridColumns?.xlarge : ''}`]:
      typeof gridColumns !== 'number' && gridColumns?.xlarge !== undefined,
  });
}
