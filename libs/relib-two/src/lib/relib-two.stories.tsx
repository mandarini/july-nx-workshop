import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RelibTwo } from './relib-two';

export default {
  component: RelibTwo,
  title: 'RelibTwo',
} as ComponentMeta<typeof RelibTwo>;

const Template: ComponentStory<typeof RelibTwo> = (args) => (
  <RelibTwo {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
