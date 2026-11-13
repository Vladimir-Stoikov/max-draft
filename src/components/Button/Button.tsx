import type { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 's' | 'm' | 'l';
  isLoading?: boolean;
}

export default function Button({ variant = 'primary', size = 'm', isLoading = false, className = '', children, disabled, ...props }: ButtonProps) {
  const style = {
    primary: 'bg-(--primary) text-(--background)',
    secondary: 'border border-(--border) bg-(--surface) text-(--foreground)',
    ghost: 'bg-transparent text-(--primary) hover:bg-(--accent)',

    s: 'h-8 px-3 text-sm',
    m: 'h-10 px-4 text-sm',
    l: 'h-12 px-5 text-base',
  };

  const baseStyle = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50';

  return (
    <button type='button' disabled={disabled || isLoading} className={`${baseStyle} ${style[variant]}  ${style[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
