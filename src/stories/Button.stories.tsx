import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button/Normal',
  component: Button.Normal,
  args: {
    label: "Lupa Password?",
    onClick: () => alert('lupa password on click'),
    type: 'button'
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button.Normal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button.Normal> = (args) => <Button.Normal {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Outline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outline.args = {
  variant: 'outline'
};

export const White = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
White.args = {
  variant: 'white'
};

export const Rounded = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rounded.args = {
  rounded: true
};

export const Disable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disable.args = {
  rounded: true,
  disabled: true
};