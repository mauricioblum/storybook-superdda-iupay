import { addDecorator } from '@storybook/react';
import withGlobalAppView from './globalAppView';
import { withInfo } from "@storybook/addon-info";

import { jsxDecorator } from 'storybook-addon-jsx';

addDecorator(withGlobalAppView);
addDecorator(withInfo);
addDecorator(jsxDecorator);
