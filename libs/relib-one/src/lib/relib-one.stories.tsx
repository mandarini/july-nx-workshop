import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RelibOne } from './relib-one';

export default {
  component: RelibOne,
  title: 'RelibOne',
} as ComponentMeta<typeof RelibOne>;

const Template: ComponentStory<typeof RelibOne> = (args) => (
  <RelibOne {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
