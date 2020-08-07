import React from 'react';
import { makeDecorator } from '@storybook/addons';
import AppView from './AppView';

export default makeDecorator({
  name: 'withGlobalAppView',
  parameterName: 'appView',
  wrapper: (storyFn, context, { parameters }) => {
      return <AppView bgColor={parameters && parameters.bgColor || '#fed487'}>{storyFn(context)}</AppView>;
  }
});
