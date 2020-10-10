import React from 'react';
import classNames from 'classnames';
import './Text.css';

export const TextType = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
} as const;

// https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/

type TextType = typeof TextType[keyof typeof TextType];

export interface TextProps {
  disabled?: boolean;
  strong?: boolean;
  ellipsis?: boolean; // 텍스트 공간 가득찼을대 어떻게 표시 ?
  link?: string;
  type?: TextType;
  className?: string;
  style?: React.CSSProperties;
  copyable?: boolean;
  underline?: boolean;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = (props) => {
  const {
    disabled = false,
    strong = false,
    ellipsis = false,
    underline = false,
    type,
    className,
    style,
    children,
    link,
  } = props;

  const textClassName = classNames(
    'text',
    {
      disabled,
      strong,
      ellipsis,
      link,
      underline,
    },
    [type],
    className
  );

  return (
    <div className={textClassName} style={style}>
      {link ? children : <a href={link}>{children}</a>}
    </div>
  );
};

export default Text;
