import { Reducer } from 'react';

export type VariantValue = 'small' | 'medium' | 'large';
export type NavActionValue = 'arrow_back' | 'menu';
export type ActionsValues = 'search' | 'notifications' | 'account_circle';
export type PropsState = {
  variant?: VariantValue;
  navAction?: NavActionValue;
  actions?: Array<ActionsValues>;
  customContent?: boolean;
  headline?: string;
  subtitle?: string;
  centeredText?: boolean;
  isScroll?: boolean;
  isFluid?: boolean;
};

export const initialState: PropsState = {
  actions: ['account_circle'],
  centeredText: false,
  customContent: false,
  headline: 'Headline',
  isFluid: false,
  isScroll: false,
  navAction: 'arrow_back',
  subtitle: 'Subtitle',
  variant: 'small',
};

export const reducer: Reducer<
  PropsState,
  Partial<PropsState & { changeAction: ActionsValues }>
> = (state, change) => {
  if (!change.changeAction) {
    return { ...state, ...change };
  }
  const current = [...(state.actions || [])];
  if (current?.includes(change.changeAction)) {
    return {
      ...state,
      actions: current.filter(entry => entry !== change.changeAction),
    };
  }
  return { ...state, actions: [...(state.actions || []), change.changeAction] };
};
