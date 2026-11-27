import type { ReactElement } from 'react';
import type { ButtonProps } from '../Button/types';

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'leftIcon' | 'rightIcon'> {
  icon: ReactElement;
  children?: never;
}
