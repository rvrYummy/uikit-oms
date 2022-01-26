import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from 'components/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card/Product',
  component: Card.Product,
  args: {
    label: 'Aqua air mineral 600ml',
    onPress: () => undefined
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card.Product>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card.Product> = (args) => <Card.Product {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
