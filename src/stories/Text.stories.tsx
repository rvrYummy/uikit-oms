import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "components/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Typography/Text",
  component: Text,
  args: {
    className: "font-interSemiBold",
    label: "BA-Asian Popcorn Chicken With Rice",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const XXLarge = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
XXLarge.args = {
  variant: "x-x-large",
};

export const XLarge = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
XLarge.args = {
  variant: "x-large",
};
export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  variant: "large",
};
export const Regular = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Regular.args = {
  variant: "regular",
};
export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  variant: "small",
};
export const SuperSmall = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SuperSmall.args = {
  variant: "super-small",
};
export const Micro = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Micro.args = {
  variant: "micro",
};
