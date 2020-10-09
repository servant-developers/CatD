import React from 'react';
import { ButtonTypes, Size } from './types';
import styles from './Button.scss';
import classNames from 'classnames';

export function getStyleClassByType(buttonType?: ButtonTypes | string | null) {
  switch (buttonType) {
    case ButtonTypes.Outline:
      return styles.buttonOutline;
    case ButtonTypes.Danger:
      return styles.buttonDanger;
    case ButtonTypes.Activated:
      return styles.buttonActivated;
    case ButtonTypes.Default:
    default:
      return styles.buttonDefault;
  }
}

export function getStyleClassBySize(size?: Size) {
  switch (size) {
    case Size.L:
      return styles.sizeL;
    case Size.S:
      return styles.sizeS;
    case Size.Normal:
    default:
      return null;
  }
}

// type은 extend/implement를 할 수 없다. ts에서도 type alias보다 보다 더 많은 것을 할 수 있기에 interface를 사용하는 것을 일반적으로 권장한다.
// ts 문서 : https://github.com/Microsoft/TypeScript/blob/f30e8a284ac479a96ac660c94084ce5170543cc4/doc/spec.md#310-type-aliases
interface ButtonProps {
  className?: string;
  buttonType?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: Size;
  children?: React.ReactNode;
}

// hoisting 등의 이유로 함수 표현식으로 하지 않음
function Button({
  className,
  buttonType = ButtonTypes.Default,
  disabled = false,
  loading = false,
  size = Size.Normal,
  children,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<any>) {
  const loader = <div className={styles.loader} />;
  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        getStyleClassByType(buttonType),
        getStyleClassBySize(size),
        className,
        {
          [styles.loading]: loading,
        }
      )}
      disabled={disabled || loading}
    >
      {loading ? loader : children}
    </button>
  );
}

export default Button;
