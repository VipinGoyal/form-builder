import React from 'react';

import { TextArea } from '.';

export default {
  title: 'Example/TextArea',
  component: TextArea,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <TextArea {...args} />;

export const TextAreaInput = Template.bind({});
