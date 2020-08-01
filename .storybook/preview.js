import { addDecorator } from '@storybook/react';
import withGlobalAppView from './globalAppView';

import { jsxDecorator } from 'storybook-addon-jsx';

addDecorator(withGlobalAppView);
addDecorator(jsxDecorator);
