import React, { CSSProperties } from 'react';
import './button.scss';

export type Size = 'small' | 'large';
export type Type = 'default' | 'primary' | 'warning' | 'danger' | 'link';

export interface ButtonProps {
  text: string;
  type?: Type;
  size?: Size;
  block?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = 'default',
  size = 'large',
  block = false,
  disabled = false,
  isLoading = false,
  ...props
}) => {
  const className = [
    'jmin-button',
    `jmin-button--${type}`,
    `jmin-button--${size}`,
  ].join(' ');
  const style = {
    width: block ? '100%' : 'auto',
    cursor: disabled && 'not-allowed',
    opacity: disabled && 0.6,
    border: disabled && 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  } as CSSProperties;

  return (
    <button type="button" className={className} style={style} {...props}>
      <span>{text}</span>
      {isLoading && (
        <span style={{ marginLeft: '3px' }}>
          <div className="spinner" />
        </span>
      )}
    </button>
  );
};
