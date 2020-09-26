import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonBaseProps } from './Button';

export default {
  title: 'Example/Button',
  parameters: {
    componentSubtitle: '연습용 버튼입니다',
  },
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonBaseProps> = (args: ButtonBaseProps) => (
  <Button {...args}>테스트</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: 'primary',
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  type: 'default',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  type: 'danger',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Button',
  loading: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Button',
  rounded: true,
};

export const Circle = Template.bind({});
Circle.args = {
  label: 'Button',
  shape: 'circle',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  type: 'primary',
  disabled: 'true',
};
