import React from 'react';
import classNames from 'classnames';
import styles from './Text.scss';

/* eslint-disable no-unused-vars */
enum Size {
  Size12 = 'size12',
  Size14 = 'size14',
  Size16 = 'size16',
}

function getStyleClassBySize(size: Size) {
  switch (size) {
    case Size.Size12:
      return styles.size12;
    case Size.Size16:
      return styles.size16;
    case Size.Size14:
    default:
      return styles.size14;
  }
}

interface TextProps {
  bold?: boolean;
  size?: Size;
  className?: string;
  children?: string;
}

function Text({
  bold = false,
  size = Size.Size14,
  className,
  children,
}: TextProps & React.ButtonHTMLAttributes<any>) {
  return (
    <span className={classNames(className, getStyleClassBySize(size))}>
      {bold ? <b>{children}</b> : children}
    </span>
  );
}

export default Text;
