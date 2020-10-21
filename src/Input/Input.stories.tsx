import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from './Input';

export default {
  title: 'Example/Input',
  parameters: {
    componentSubtitle: '연습용 인풋입니다',
  },
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputProps> = (args: InputProps) => (
  <Input {...args}>테스트</Input>
);

type PartialInputProps = Partial<InputProps>;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'less than 5',
  validator: (text: string) => text.length < 5,
  errorMessage: 'Max Length is 5',
} as PartialInputProps;

export const Label = Template.bind({});
Label.args = {
  label: '핸드폰번호',
  type: 'text',
} as PartialInputProps;

// export const Loading = Template.bind({});
// Loading.args = {
//   label: 'Input',
//   loading: true,
// };

// export const Rounded = Template.bind({});
// Rounded.args = {
//   label: 'Input',
//   rounded: true,
// };

// export const Circle = Template.bind({});
// Circle.args = {
//   label: 'Input',
//   shape: 'circle',
// };

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  placeholder: 'disabled',
  disabled: true,
} as PartialInputProps;
