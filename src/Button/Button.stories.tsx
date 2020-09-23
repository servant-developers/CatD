import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  parameters: {
    componentSubtitle: '연습용 버튼입니다',
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} onClick={action('button clicked')} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  text: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  text: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  text: 'warning',
};

export const Link = Template.bind({});
Link.args = {
  type: 'link',
  text: 'link',
};

export const Unabled = Template.bind({});
Unabled.args = {
  size: 'small',
  text: 'small',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'small',
};

export const Block = Template.bind({});
Block.args = {
  block: true,
  text: 'block',
};

export const Primary_Disabled = Template.bind({});
Primary_Disabled.args = {
  type: 'primary',
  disabled: true,
  text: 'primary & disabled',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  text: 'loading',
};

export const Loading2 = Template.bind({});
Loading2.args = {
  type: 'primary',
  isLoading: true,
  text: 'loading',
};
