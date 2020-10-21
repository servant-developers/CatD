import React, { useState } from 'react';
import { InputDefaultProps } from './Input';
import './input-number.css';

export type InputNumberProps = {
  maxDigit?: number;
  step?: number;
} & InputDefaultProps;

const NumberInput: React.FC<InputNumberProps> = (props) => {
  const { maxDigit, step = 1, onChange, ...rest } = props;

  const [value, setValue] = useState<string | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    let value = event.target.value.replace(/[^0-9]/g, ''); // 숫자가 아닌거 전부 밀음.

    if (maxDigit && value.length > maxDigit) {
      value = value.substring(0, value.length - 1);
    }

    onChange?.(event);

    setValue(Number(value).toLocaleString());
  };

  return (
    <input
      {...rest}
      step={step}
      onChange={handleChange}
      value={value}
      type="text"
    />
  );
};

export default NumberInput;
