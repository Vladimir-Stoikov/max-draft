import type { ComponentProps, ReactElement } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 's' | 'm' | 'l';
  isLoading?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export default function Button({ variant = 'primary', size = 'm', isLoading = false, leftIcon, rightIcon, className = '', children, disabled, ...props }: ButtonProps) {
  const style = {
    primary: 'bg-(--primary) text-(--background)',
    secondary: 'border border-(--border) bg-(--surface) text-(--foreground)',
    ghost: 'bg-transparent text-(--primary) hover:bg-(--accent)',

    s: 'h-8 px-3 text-sm',
    m: 'h-10 px-4 text-sm',
    l: 'h-12 px-5 text-base',
  };

  const glowStyle = 'enabled:hover:shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_20%,transparent)]';

  const baseStyle = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 enabled:active:scale-99 ${variant !== 'ghost' ? glowStyle : ''}`;

  return (
    <button type='button' disabled={disabled || isLoading} className={`${baseStyle} ${style[variant]}  ${style[size]} ${className}`} {...props}>
      {leftIcon && (
        <span aria-hidden='true' className='inline-flex size-5 shrink-0 items-center justify-center [&>svg]:size-full'>
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span aria-hidden='true' className='inline-flex size-5 shrink-0 items-center justify-center [&>svg]:size-full'>
          {rightIcon}
        </span>
      )}
    </button>
  );
}
