import { Button } from '../Button/Button';
import styles from './iconButton.module.scss';
import clsx from 'clsx';
import type { IconButtonProps } from './types';

export const IconButton = ({ variant = 'primary', size = 'm', isLoading = false, icon, type = 'button', className, disabled, ...props }: IconButtonProps) => {
  return (
    <Button type={type} isLoading={isLoading} disabled={disabled} variant={variant} size={size} className={clsx(styles.iconButton, styles[size], className)} {...props}>
      <span aria-hidden='true' className={styles.icon}>
        {icon}
      </span>
    </Button>
  );
};
