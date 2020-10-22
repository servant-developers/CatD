/* eslint-disable no-unused-vars */
import React, {
  ChangeEvent,
  CSSProperties,
  ReactElement,
  useState,
} from 'react';
import classNames from 'classnames';
import './Input.scss';

export const SizeType = {
  s: 'small',
  m: 'middle',
  l: 'large',
} as const;

type SizeType = typeof SizeType[keyof typeof SizeType];

export interface InputProps extends Partial<ReactElement> {
  type?: 'text';
  placeholder: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  defaultValue?: string;
  className?: Partial<CSSProperties>;
  size?: SizeType;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  disabled,
  onChange = () => undefined,
  onFocus = () => undefined,
  onBlur = () => undefined,
  defaultValue = '',
  className,
  size = SizeType.m,
}) => {
  const [isFocused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue);

  const disabledClass = 'disabled:opacity-75 cursor-not-allowed';
  const focusedClass = 'focus:opacity-75';

  const containerClass = classNames('flex', 'items-center');

  const inputClass = classNames(
    className,
    {
      [disabledClass]: disabled,
      [focusedClass]: isFocused,
    },
    'text-black',
    'p-1',
    'rounded',
    'bg-gray-500',
    'outline-none',
    'placeholder-gray-200'
  );

  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const handleOnFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setFocused(true);
    onFocus(e);
  };

  const handleOnBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setFocused(false);
    onBlur(e);
  };

  return (
    <div className={containerClass}>
      <input
        className={classNames(inputClass, size)}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        disabled={disabled}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
