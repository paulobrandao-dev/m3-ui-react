import { Reducer } from 'react';

export type ButtonVariant =
  | 'text'
  | 'outlined'
  | 'filled'
  | 'elevated'
  | 'tonal';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type PropsState = {
  children: string;
  icon?: string;
  iconSize: number;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
};

export const initialState: PropsState = {
  children: 'Add',
  icon: 'add',
  size: 'sm',
  variant: 'text',
  iconSize: 20,
};

export const reducer: Reducer<PropsState, Partial<PropsState>> = (
  state,
  changes,
) => {
  let iconSize = 20;
  if (changes.size) {
    switch (changes.size) {
      case 'md':
        iconSize = 24;
        break;
      case 'lg':
        iconSize = 32;
        break;
      case 'xl':
        iconSize = 40;
        break;
      case 'xs':
      default:
        iconSize = 20;
        break;
    }
  }

  return { ...state, ...changes, iconSize };
};
