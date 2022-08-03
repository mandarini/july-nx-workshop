import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RelibThree } from './relib-three';

export default {
  component: RelibThree,
  title: 'RelibThree',
} as ComponentMeta<typeof RelibThree>;

const Template: ComponentStory<typeof RelibThree> = (args) => (
  <RelibThree {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
