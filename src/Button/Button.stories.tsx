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
  argTypes: {
    basicColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} onClick={action('button clicked')} />
);

export const CatdButton = Template.bind({});
CatdButton.args = {
  text: 'Button',
} as ButtonProps;
