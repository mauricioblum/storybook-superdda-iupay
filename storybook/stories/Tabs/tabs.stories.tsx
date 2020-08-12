import * as React from 'react';
import { Tabs } from '../../components/Tabs';
import { MonthSelector } from '../../components/MonthSelector';

export default {
  title: 'Tabs',
  parameters: {
    jsx: { skip: 2 },
    actions: { disable: true },
  },
};

const tabs = [
  {
    order: 0,
    title: 'pagamentos',
  },
  {
    order: 1,
    title: 'beneficiários',
  },
  {
    order: 2,
    title: 'recusados',
  },
];

export const Default = () => {
  return <Tabs tabs={tabs} />;
};

export const withMonthSelector = () => {
  return (
    <>
      <Tabs tabs={tabs} />
      <MonthSelector currentMonth={new Date().getMonth()} />
    </>
  );
};
