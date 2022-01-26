import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Form } from "components/Form";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Form/Input",
  component: Form.Input,
  args: {
    label: "email",
    placeholder: "Masukkan alamat email",
    exampleValue: "Email reset password akan dikirim ke email tertulis",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Form.Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Form.Input> = (args) => (
  <Form.Input {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
