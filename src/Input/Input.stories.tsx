import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Input, { TextProps, NumberProps } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

export const InputOnly = () => <Input label="zz" />;
export const InputWithTextProps = () => <Input<TextProps> label="Title" />;
export const InputWithNumberProps = () => (
  <Input<NumberProps> label="Title" maxDigit={10} type="number" />
);
