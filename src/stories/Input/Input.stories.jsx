import React from 'react';

import { Input } from '.';

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
