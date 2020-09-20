import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  parameters: {
    componentSubtitle: '연습용 버튼입니다',
  },
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} onClick={action('button clicked')} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Default',
} as ButtonProps;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  text: 'Primary',
} as ButtonProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'Large',
} as ButtonProps;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'Small',
} as ButtonProps;

export const Full = Template.bind({});
Full.args = {
  text: 'Full',
  hasFullWidth: true,
} as ButtonProps;
