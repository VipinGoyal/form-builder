import React from "react";

import { Radio } from ".";

export default {
  title: "Example/Radio",
  component: Radio,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Radio {...args} />;

export const SelectInput = Template.bind({});
