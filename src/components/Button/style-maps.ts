import type { ButtonProps } from './types';
import styles from './button.module.scss';

export const variantStylesMap = new Map<ButtonProps['variant'], string | undefined>([
  ['primary', styles.primary],
  ['secondary', styles.secondary],
  ['ghost', styles.ghost],
]);

export const sizeStylesMap = new Map<ButtonProps['size'], string | undefined>([
  ['s', styles.s],
  ['m', styles.m],
  ['l', styles.l],
]);
