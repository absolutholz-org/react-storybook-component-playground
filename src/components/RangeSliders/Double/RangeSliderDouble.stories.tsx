import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RangeSliderDouble from './RangeSliderDouble';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'RangeSliders',
  component: RangeSliderDouble,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RangeSliderDouble>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RangeSliderDouble> = (args) => <RangeSliderDouble {...args} />;

export const RangeSliderDoubleStory = Template.bind({});
RangeSliderDoubleStory.storyName = 'Double';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RangeSliderDoubleStory.args = {
    min: 0,
    max: 10,
    step: 1,
};
