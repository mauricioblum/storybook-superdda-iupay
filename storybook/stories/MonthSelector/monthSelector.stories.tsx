import * as React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { callback } from '../../helpers/callback';
import { MonthSelector } from '../../components/MonthSelector';

export default {
  title: 'MonthSelector',
  decorators: [withKnobs],
  parameters: {
    jsx: { skip: 2 },
  },
};

export const Default = () => {
  return (
    <MonthSelector
      currentMonth={new Date().getMonth()}
      onSelectMonth={callback(action('Month selected'))}
      monthScrollCenterOffset={number('Scroll offset', 400)}
    />
  );
};
