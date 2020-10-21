/* eslint-disable no-unused-vars */
import React, { CSSProperties, ReactElement, useState } from 'react';
import classNames from 'classnames';
import './Input.scss';

export const InputType = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
} as const;

type InputType = typeof InputType[keyof typeof InputType];
type ValidatorFunction = (text: string) => boolean | Promise<boolean>;
type DataFetcher = (text: string) => string[] | Promise<string[]>;

export interface InputProps extends Partial<ReactElement> {
  type?: 'text';
  label?: string;
  placeholder: string;

  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  validator?: ValidatorFunction | RegExp;
  errorMessage: string;
  minLength?: number;
  maxLength?: number;
  dataFetcher?: DataFetcher;

  align?: 'start' | 'center' | 'end';
  style?: Partial<CSSProperties>;
  fullWidth?: boolean;
}

const DELAY_TIME = 300;

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  placeholder,
  disabled = false,
  onFocus,
  onBlur,
  validator,
  errorMessage,
  minLength,
  maxLength,
  dataFetcher,
  align = 'start',
  style,
  fullWidth = false,
}) => {
  const [isErrorVisible, setErrorVisible] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [fetchedData, setFetchedData] = useState<string[]>([]);

  let debounceTimeout = 0;

  const errorVisibleCondition = errorMessage && validator && isErrorVisible;

  // style related
  const disabledClass = 'disabled:opacity-75 cursor-not-allowed';
  const focusedClass = 'focus:opacity-75';

  const containerClass = classNames('flex', 'items-center', `justify-${align}`);

  const labelClass = classNames();

  const inputClass = classNames(
    {
      [disabledClass]: disabled,
      [focusedClass]: isFocused,
      'w-full': fullWidth,
    },
    'text-black',
    'p-1',
    'rounded',
    'bg-gray-500',
    'outline-none',
    'placeholder-gray-200'
  );

  const errorClass = classNames(
    'text-xs',
    'ml-1',
    'mt-1',
    'text-red-700',
    'font-thin'
  );

  // data handling
  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!onFocus) {
      return;
    }

    setFocused(true);
    onFocus();
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!onBlur) {
      return;
    }

    setFocused(false);
    onBlur();
  };

  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const textInput = e.target.value;

    if (validator) {
      inputTextValidator(textInput);
    }

    if (dataFetcher) {
      setFetchedData(await dataFetcher(textInput));
    }
  };

  const inputTextValidator = (text: string) => {
    if (debounceTimeout) {
      window.clearTimeout(debounceTimeout);
    }

    debounceTimeout = window.setTimeout(async () => {
      let isValidInput: boolean = true;
      if (validator instanceof RegExp) {
        isValidInput = validator.test(text);
      } else if (typeof validator === 'function') {
        const validatedResult = validator(text);
        isValidInput =
          validatedResult instanceof Promise
            ? await validatedResult
            : validatedResult;
      }

      setErrorVisible(!isValidInput);
    }, DELAY_TIME);
  };

  const renderFetchedData = () => {
    if (!fetchedData || fetchedData.length === 0) {
      return null;
    }

    return fetchedData.map((data: string, idx: number) => (
      <p key={idx}>{data}</p>
    ));
  };

  return (
    <div className={containerClass} style={style}>
      {label && <label className={labelClass}>{label}</label>}
      <input
        className={inputClass}
        type={type}
        min={minLength}
        max={maxLength}
        placeholder={placeholder}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        disabled={disabled}
        style={style}
      />
      {renderFetchedData()}
      {errorVisibleCondition && <p className={errorClass}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
