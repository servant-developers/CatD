import React, { CSSProperties } from 'react';
import './button.scss';

export type TypeOfButton = 'default' | 'primary' | 'danger';
export type SizeOfButton = 'small' | 'medium' | 'large';
export type StyleOfButton = 'fill' | 'outlined' | 'dashed' | 'text';

export interface ButtonProps {
  text: string;
  type?: TypeOfButton;
  style?: StyleOfButton;
  size?: SizeOfButton;
  disabled?: boolean;
  hasFullWidth?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = 'default',
  style = 'fill',
  size = 'medium',
  disabled = false,
  hasFullWidth = false,
  ...props
}) => {
  const combinedClass = [
    'catd-button',
    `catd-button__type--${type}`,
    `catd-button__size--${size}`,
    `catd-button__style--${style}`,
  ].join(' ');

  const appendedStyle = {
    width: hasFullWidth ? '100%' : 'auto',
  } as CSSProperties;

  return (
    <button
      type="button"
      className={combinedClass}
      disabled={disabled}
      style={appendedStyle}
      {...props}
    >
      <span>{text}</span>
    </button>
  );
};
