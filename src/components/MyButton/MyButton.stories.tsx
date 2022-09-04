import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import MyButton from './MyButton';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: MyButton,
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
    prefix: {
      control: { type: 'text' },
    },
    suffix: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof MyButton>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MyButton> = args => <MyButton {...args} />;

export const Default = Template.bind({});
Default.args = { prefix: 'My ', children: 'Button Story' };
