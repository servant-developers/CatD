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
