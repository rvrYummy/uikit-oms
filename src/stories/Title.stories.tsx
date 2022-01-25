import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "components/Title";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Typography/Title",
  component: Title,
  args: {
      label: "Yummy Corp Point Of Sales",
      className: "font-interMedium"
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Title>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Title1 = Template.bind({});
Title1.args = {
    variant: 'title1'
  };
// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Title2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Title2.args = {
  variant: 'title2'
};

export const Title3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Title3.args = {
  variant: 'title3'
};

export const Subtitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Subtitle.args = {
  variant: 'subtitle'
};
