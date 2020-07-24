import React from 'react';
import { addDecorator } from '@storybook/react';
import AppView from './AppView';

import { jsxDecorator } from 'storybook-addon-jsx';

addDecorator(storyFn => <AppView>{storyFn()}</AppView>);
addDecorator(jsxDecorator);
