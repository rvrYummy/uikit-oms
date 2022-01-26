import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Form } from "components/Form";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Form/Select",
  component: Form.Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Form.Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Form.Select> = (args) => (
  <Form.Select {...args} />
);

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      label: 'Bumbu Asia',
      value: 'Bumbu Asia',
    },
    {
      label: 'Burritos',
      value: 'Burritos',
    },
    {
      label: 'Cilukbites',
      value: 'Cilukbites',
    },
  ]
}
