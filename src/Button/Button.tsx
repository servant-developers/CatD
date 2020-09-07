import React from 'react';
import './button.scss';

export type Size = 'small' | 'medium' | 'large';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: Size;
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  console.log('zz');
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
