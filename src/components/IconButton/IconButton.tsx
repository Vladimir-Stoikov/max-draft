import type { ComponentProps, ReactElement } from 'react';
import { Button } from '../Button/Button';
import styles from './iconButton.module.scss';
import clsx from 'clsx';

interface IconButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 's' | 'm' | 'l';
  isLoading?: boolean;
  icon: ReactElement;
  children?: never;
}

export const IconButton = ({ variant = 'primary', size = 'm', isLoading = false, icon, className = '', disabled, ...props }: IconButtonProps) => {
  return (
    <Button isLoading={isLoading} disabled={disabled} variant={variant} size={size} className={clsx(styles.iconButton, styles[size], className)} {...props}>
      {icon && (
        <span aria-hidden='true' className={styles.icon}>
          {icon}
        </span>
      )}
    </Button>
  );
};
