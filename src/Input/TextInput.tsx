import React from 'react';
import { InputDefaultProps } from './Input';

export type TextInputProps = {
  formatter?: (value: string) => void;
} & InputDefaultProps;

const TextInput: React.FC<TextInputProps> = (props) => {
  return <input type="Text" />;
};

export default TextInput;
