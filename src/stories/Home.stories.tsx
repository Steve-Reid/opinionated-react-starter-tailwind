import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Home from '../components/Home/Home';

export default {
  title: 'Test/App',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home />;

export const HomePage = Template.bind({});
