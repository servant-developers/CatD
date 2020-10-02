import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Text, { TextProps } from './Text';

export default {
  title: 'Example/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args: TextProps) => (
  <Text {...args}>테스트</Text>
);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
