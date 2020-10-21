import React, { ReactNode, useState } from 'react';
import classnames from 'classnames';
import './input.css';
import NumberInput, { InputNumberProps } from './NumberInput';
import { SearchInputProps } from './SeartchInput';
import TextInput from './TextInput';

export type InputDefaultProps = {
  label?: ReactNode;
  direction?: 'row' | 'col';
  disabled?: boolean;
  error?: string | Error;
  type?: 'text' | 'number' | 'search';
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'step'>;

export type TextProps = InputDefaultProps;
export type NumberProps = InputNumberProps;

export type InputTypes = TextProps | NumberProps | undefined;

// const GenericInput = <P extends Text| Number>(props: React.PropsWithChildren<Props<P>>) => {
//   return <div>{JSON.stringify(props.genericProp)}</div>;
// };

const Input = <P extends InputTypes>(props: React.PropsWithChildren<P>) => {
  const {
    label,
    className,
    direction = 'col',
    disabled = false,
    error = '에러입니다.',
    type = 'text',
    ...rest
  } = props;

  const [value, setValue] = useState<string | undefined>();
  const [inputError, setInputError] = useState<string | Error | undefined>(
    error
  );

  // TODO type number ... 뒤에 단위 붙이는거 구현.
  // TODO type password
  // TODO type textArea
  // TODO type date
  // TODO type search

  // TODO savemode
  // TODO 단축키... ?
  // delay validate ...?

  const getInputClassName = classnames(
    'input',
    className,
    { disabled },
    { error }
  );

  const getComponent = (type: string) => {
    switch (type) {
      case 'text':
        return (
          <TextInput
            {...rest}
            maxLength={3}
            disabled={disabled}
            className={getInputClassName}
            type="text"
          />
        );
      case 'number':
        return (
          <NumberInput
            {...rest}
            disabled={disabled}
            className={getInputClassName}
          />
        );
      default:
        return <input {...rest} type={type} />;
    }
  };

  const getErrorText = (error: Error | string) => {
    if (error instanceof Error) {
      return error.message;
    }

    return error;
  };

  return (
    <div className={`flex flex-${direction}`}>
      {label && <label className="label">{label}</label>}
      {getComponent(type)}
      {error && <div className="error">{getErrorText(error)}</div>}
    </div>
  );
};

export const InputText = <Input<TextProps> type="text" />;
export const InputNumber = <Input<NumberProps> type="number" />;
export const InputSearch = <Input<SearchInputProps> type="search" />;

Input.Number = InputNumber;
Input.Text = InputText;
Input.Search = InputSearch;

export default Input;
