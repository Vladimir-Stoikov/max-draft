import clsx from 'clsx';
import styles from './button.module.scss';

import type { ComponentProps, ReactElement } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 's' | 'm' | 'l';
  isLoading?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export const Button = ({ variant = 'primary', size = 'm', isLoading = false, leftIcon, rightIcon, className = '', children, disabled, ...props }: ButtonProps) => {
  return (
    <button type='button' disabled={disabled || isLoading} className={clsx(styles.button, styles[variant], styles[size], className)} {...props}>
      {leftIcon && (
        <span aria-hidden='true' className={styles.icon}>
          {leftIcon}
        </span>
      )}
      <span className={styles.text}>{children}</span>
      {rightIcon && (
        <span aria-hidden='true' className={styles.icon}>
          {rightIcon}
        </span>
      )}
    </button>
  );
};
