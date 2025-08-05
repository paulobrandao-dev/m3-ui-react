export type SpacingSizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type FlexDirections =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';

export type FlexAlignItems =
  | 'baseline'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch';

export type FlexJustifyContent =
  | FlexAlignItems
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export type MaterialTextScales =
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
  | 'label-small';

export type MaterialSpacingProps = {
  padding?: SpacingSizes;
  paddingInline?: SpacingSizes;
  paddingInlineEnd?: SpacingSizes;
  paddingInlineStart?: SpacingSizes;
  paddingBlock?: SpacingSizes;
  paddingBlockEnd?: SpacingSizes;
  paddingBlockStart?: SpacingSizes;
  margin?: SpacingSizes | 'auto';
  marginInline?: SpacingSizes | 'auto';
  marginInlineEnd?: SpacingSizes | 'auto';
  marginInlineStart?: SpacingSizes | 'auto';
  marginBlock?: SpacingSizes | 'auto';
  marginBlockEnd?: SpacingSizes | 'auto';
  marginBlockStart?: SpacingSizes | 'auto';
};

export type MaterialGapProps = {
  gap?: SpacingSizes;
  rowGap?: SpacingSizes;
  columnGap?: SpacingSizes;
};

export type MaterialFlexboxProps = MaterialGapProps & {
  direction: FlexDirections;
  alignItems?: FlexAlignItems;
  justifyContent?: FlexJustifyContent;
  alignSelf?: 'auto' | FlexAlignItems;
  justifySelf?: 'auto' | FlexAlignItems;
};

export type MaterialGridProps = MaterialGapProps & {
  columns: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};
