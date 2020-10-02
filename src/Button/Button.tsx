import React from 'react';
import './Button.scss';
import classNames from 'classnames';

// import styled from '@emotion/styled';

// https://styled-system.com/packages
// import { space, layout, typography, color } from 'styled-system';

export type SizeType = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'link'
  | 'text';
export type ButtonShape = 'rectangle' | 'circle';

// export type NativeButtonProps = {
//   htmlType?: ButtonHTMLType;
//   onClick?: React.MouseEventHandler<HTMLElement>;
// } & BaseButtonProps &
//   Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonBaseProps = {
  loading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  bordered?: boolean;
  rounded?: boolean;
  textColor?: string;
  background?: string;
  className?: string;
  size?: SizeType;
  type?: ButtonType;
  shape?: ButtonShape;
  disabled?: boolean;
  visible?: boolean;
} & React.ButtonHTMLAttributes<any>;

const Button: React.FC<ButtonBaseProps> = (props) => {
  const {
    loading = false,
    loadingText = 'Loading...',
    rounded = false,
    textColor = 'white',
    background,
    type = 'default',
    size = 'sm',
    shape = 'rectangle',
    disabled = false,
    visible = true,
    children,
  } = props;

  const circleClassNames = 'rounded-full flex items-center justify-center';
  const disabledClassNames = `disabled:opacity-75 cursor-not-allowed`;

  const mergeClassNames = classNames(
    {
      [`text-${textColor}`]: true,
      [`bg-${background || type}`]: true,
      ['rounded']: rounded,
      [circleClassNames]: shape !== 'rectangle',
      [disabledClassNames]: disabled,
      ['invisible']: !visible,
    },
    'p-4',
    'transform duration-500 ease-in-out hover:scale-110',
    'active:bg-orange-900',
    'focus:outline-none',
    `${size}:w-${shape === 'rectangle' ? 48 : 24} h-24`
  );

  const loadingChildren = (
    <div className="flex items-center justify-center">
      <svg className="animate-spin h-5 w-5 mr-3 bg-white" viewBox="0 0 24 24" />
      {loadingText || children}
    </div>
  );

  return (
    <button disabled={disabled} className={mergeClassNames}>
      {loading ? loadingChildren : children}
    </button>
  );
};

export default Button;
