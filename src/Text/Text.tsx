import React from 'react';
import classNames from 'classnames';
import './text.scss';

export const TextType = {
  secondary: 'secondary',
  primary: 'primary',
  warning: 'warning',
  danger: 'danger',
} as const;

type TextType = typeof TextType[keyof typeof TextType];

export interface TextProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  editable?: boolean;
  copyable?: boolean;
  type?: TextType;
  disabled?: boolean;
  ellipsis?: boolean;
  link?: string;
  // decorations
  code?: boolean;
  mark?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  keyboard?: boolean;
}

const Text: React.FC<TextProps> = (props) => {
  const {
    disabled = false,
    title = false,
    link,
    type,
    className,
    style,
    children,
  } = props;

  const textClassName = classNames(
    'text',
    {
      disabled,
      title,
      link,
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
