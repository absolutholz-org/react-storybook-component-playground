import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RangeSliderSingle from './RangeSliderSingle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'RangeSliders',
  component: RangeSliderSingle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RangeSliderSingle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RangeSliderSingle> = (args) => <RangeSliderSingle {...args} />;

export const RangeSliderSingleStory = Template.bind({});
RangeSliderSingleStory.storyName = 'Single';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RangeSliderSingleStory.args = {
    min: 0,
    max: 10,
    step: 1,
    defaultValue: 0,
};
