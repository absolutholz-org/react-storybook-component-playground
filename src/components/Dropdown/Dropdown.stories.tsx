import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Public Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.storyName = 'Dropdown';
Primary.args = {
  placeholderText: 'Please select',
  id: 'storybook-dropdown-example', 
  options: [
      <div>1</div>,
      <div>2</div>,
      <div>3</div>,
  ],
};
