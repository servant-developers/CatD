import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

export type ButtonType =
  | 'primary'
  | 'default'
  | 'outlined'
  | 'dashed'
  | 'danger'
  | 'text'
  | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'circle' | 'circle-outline' | 'round';

export interface ButtonProps {
  text: string;
  type?: ButtonType;
  size?: ButtonSize;
  shape?: ButtonShape;
  basicColor?: string;
  disabled?: boolean;
  isBlock?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = 'primary',
  size = 'medium',
  shape = 'round',
  basicColor = '#1ea7fd',
  disabled = false,
  isBlock = false,
  ...props
}) => {
  return (
    <ButtonWrapper
      css={[types[type], sizes[size], shapes[shape]]}
      disabled={disabled}
      color={basicColor}
      block={isBlock}
      {...props}
    >
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ color: string; block: boolean }>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  width: ${(props) => (props.block ? '100%' : 'none')};
  display: inline-block;
  color: ${(props) => props.color};
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  line-height: 1;
  cursor: pointer;
  outline: none;

  :disabled {
    background-color: #f2f4f5;
    color: #cecece;
    border-color: #dfdfdf;
    transition: none;
    cursor: not-allowed;
  }
  :hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }
  :active {
    box-shadow: 0 0 5px 0 #fff inset, 0 0 5px 2px #fff;
    transition: all 0.15s ease-in-out;
  }
`;

const types = {
  primary: css`
    color: #fff;
  `,
  default: css`
    color: rgb(100, 100, 100);
    background-color: transparent;
    border-color: #d9d9d9;
  `,
  outlined: css`
    background-color: transparent;
  `,
  dashed: css`
    background-color: transparent;
    border-style: dashed;
  `,
  danger: css`
    background-color: transparent;
    border-color: #ff4d4f;
    color: #ff4d4f;
  `,
  text: css`
    color: #333;
    background-color: transparent;
    border-color: transparent;
  `,
  link: css`
    background-color: transparent;
    border-color: transparent;
  `,
};

const sizes = {
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
};

const shapes = {
  circle: css`
    border-radius: 50%;
  `,
  'circle-outline': css`
    border-radius: 3em;
  `,
  round: css`
    border-radius: 0.5em;
  `,
};
