import React, { CSSProperties } from 'react';
import './button.scss';

export type Size = 'small' | 'large';
export type Type = 'default' | 'primary' | 'danger' | 'text' | 'link';

export interface ButtonProps {
  text: string;
  type?: Type;
  danger?: boolean;
  disabled?: boolean;
  size?: Size;
  block?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = 'default',
  danger = false,
  disabled = false,
  size = 'large',
  block = false,
  ...props
}) => {
  const className = [
    'jmin-button',
    `jmin-button--${type}`,
    `jmin-button--${size}`,
  ].join(' ');
  const style = {
    width: block ? '100&' : 'auto',
  } as CSSProperties;

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      style={style}
      {...props}
    >
      <span>{text}</span>
    </button>
  );
};
