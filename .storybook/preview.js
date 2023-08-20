/** @type { import('@storybook/react').Preview } */
import React from 'react'
import { addDecorator } from '@storybook/react'
import Center from '../src/components/Center/Center'
addDecorator(story => <Center>{story()}</Center>)

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
