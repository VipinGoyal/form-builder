import React from "react";

import { Select } from ".";

export default {
  title: "Example/Select",
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Select {...args} />;

export const SelectInput = Template.bind({});
