import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TwoComponent } from './two.component';

export default {
  title: 'TwoComponent',
  component: TwoComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TwoComponent>;

const Template: Story<TwoComponent> = (args: TwoComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  test: 'Hello Two',
  count: 1,
};
