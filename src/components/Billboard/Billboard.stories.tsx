import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Billboard } from '.';
import { readBuilderProgram } from 'typescript';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Billboard',
  component: Billboard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
  // https://storybook.js.org/docs/react/writing-stories/decorators#component-decorators
} as ComponentMeta<typeof Billboard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Billboard> = (args) => <Billboard {...args} />;

export const WithoutChildren = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutChildren.args = {
  minHeight: '75vh',
};
// https://storybook.js.org/docs/react/writing-stories/decorators#story-decorators

export const ShortChildren = Template.bind({});
ShortChildren.args = {
  minHeight: '75vh',
  children: <div><div style={{ background: 'rgba(255, 0, 0,0.25)', padding: '1em' }}>test</div></div>, 
};

export const LongChildren = Template.bind({});
LongChildren.args = {
  minHeight: '75vh',
  children: <div style={{ background: 'rgba(255, 0, 0,0.25)', padding: '1em' }}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget. Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Senectus et netus et malesuada fames ac turpis egestas. Enim nec dui nunc mattis. Et netus et malesuada fames ac turpis egestas integer eget. Felis imperdiet proin fermentum leo vel orci porta. Lectus sit amet est placerat. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Mi bibendum neque egestas congue quisque egestas diam in. Lectus mauris ultrices eros in cursus turpis massa. Eget mauris pharetra et ultrices neque.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget. Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Senectus et netus et malesuada fames ac turpis egestas. Pellentesque elit ullamcorper dignissim cras. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Elit scelerisque mauris pellentesque pulvinar. Enim nec dui nunc mattis. Et netus et malesuada fames ac turpis egestas integer eget. Felis imperdiet proin fermentum leo vel orci porta. Lectus sit amet est placerat. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Mi bibendum neque egestas congue quisque egestas diam in. Lectus mauris ultrices eros in cursus turpis massa. Eget mauris pharetra et ultrices neque.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget. Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Senectus et netus et malesuada fames ac turpis egestas. Enim nec dui nunc mattis. Et netus et malesuada fames ac turpis egestas integer eget. Felis imperdiet proin fermentum leo vel orci porta. Lectus sit amet est placerat. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Mi bibendum neque egestas congue quisque egestas diam in. Lectus mauris ultrices eros in cursus turpis massa. Eget mauris pharetra et ultrices neque.</p>
  </div>, 
};

export const PositionedChildren = Template.bind({});
PositionedChildren.args = {
  minHeight: '75vh',
  children: <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between', height: '100%', flexDirection: 'column', alignItems: 'end' }}><div style={{ background: 'rgba(255, 0, 0,0.25)', padding: '1em' }}>test</div><div style={{ background: 'rgba(255, 0, 0,0.25)', padding: '1em' }}>test</div></div>, 
};
