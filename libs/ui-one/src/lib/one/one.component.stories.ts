import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { OneComponent } from './one.component';

export default {
  title: 'OneComponent',
  component: OneComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<OneComponent>;

const Template: Story<OneComponent> = (args: OneComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  test: 'Hello One',
};
