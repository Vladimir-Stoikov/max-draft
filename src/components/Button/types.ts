import type { ComponentProps, ReactElement } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 's' | 'm' | 'l';
  isLoading?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}
