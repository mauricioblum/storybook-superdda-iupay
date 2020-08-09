import * as React from 'react';
import { View } from 'react-native';
import { withKnobs, number, boolean, text, date } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { callback } from '../../helpers/callback';

import { AccountDetails } from '../../localComponents/AccountDetails';

export default {
  title: 'AccountDetails',
  decorators: [withKnobs],
  parameters: {
    jsx: { skip: 1 },
    appView: { disable: false },
    info: { propTables: [AccountDetails] },
  },
};

function myDateKnob(name, defaultValue, group) {
  const stringTimestamp = date(name, defaultValue, group);
  return new Date(stringTimestamp);
}

const paymentHistory = [
  {
    date: '2020-01',
    value: 2589.99,
  },
  {
    date: '2020-02',
    value: 1330.45,
  },
  {
    date: '2020-03',
    value: 998.22,
  },
  {
    date: '2020-04',
    value: 1660.89,
  },
  {
    date: '2020-05',
    value: 1289.55,
  },
];

export const Default = () => {
  return (
    <>
      <View style={{ width: '100%', height: 48, backgroundColor: '#4d4d4d' }} />
      <AccountDetails
        data={{
          companyLogo: text(
            'Company Logo',
            'https://cdn2.downdetector.com/static/uploads/logo/Nubank_logo.png',
            '01 - Main',
          ),
          companyName: text('Company Name', 'Nu Pagamentos S.A.', '01 - Main'),
          cnpj: text('CNPJ', '18.236.120/0001-58', '01 - Main'),
          cardNumber: text('Card Number', '5162 **** **** 9090', '01 - Main'),
          isFromIuPay: boolean('Is IuPay?', true, '01 - Main'),
          isUserAdded: boolean('Is User added?', false, '01 - Main'),
          authorizedLimit: boolean('Authorized Limit?', false, '01 - Main'),
          autoPayment: boolean('Auto Payment?', false, '01 - Main'),
          cardHolderName: text(
            'CardHolder Name',
            'Roberto de Oliveira Santos',
            '01 - Main',
          ),
          paymentHistory,
          billDetails: {
            billDate: text(
              'Bill Date (yyyy-mm)',
              '2020-06',
              '02 - Bill Details',
            ),
            value: number('Value', 1230.89, {}, '02 - Bill Details'),
            dueDate: myDateKnob(
              'Due Date',
              new Date('Jun 20 2020'),
              '02 - Bill Details',
            ),
            emissionDate: myDateKnob(
              'Emission Date',
              new Date('Jun 07 2020'),
              '02 - Bill Details',
            ),
            minimumPaymentValue: number(
              'Minimum Payment value',
              400,
              {},
              '02 - Bill Details',
            ),
            totalLimitValue: number(
              'Total Limit Value',
              1200,
              {},
              '02 - Bill Details',
            ),
            totalWithdrawLimitValue: number(
              'Total Limit Withdraw Value',
              600,
              {},
              '02 - Bill Details',
            ),
            interestRate: number(
              'Interest Rate',
              14,
              {
                step: 1,
                min: 0,
                max: 99,
              },
              '02 - Bill Details',
            ),
            interestRateCET: number(
              'Interest Rate CET',
              385.17,
              {
                step: 1,
                min: 0,
                max: 999,
              },
              '02 - Bill Details',
            ),
            interestInstallmentRate: number(
              'Interest Installment Rate',
              12,
              {
                step: 1,
                min: 0,
                max: 99,
              },
              '02 - Bill Details',
            ),
            interestInstallmentRateCET: number(
              'Interest Installment Rate CET',
              15,
              {
                step: 1,
                min: 0,
                max: 99,
              },
              '02 - Bill Details',
            ),
            interestInstallmentFine: number(
              'Interest Installment Fine',
              22,
              {
                step: 1,
                min: 0,
                max: 99,
              },
              '02 - Bill Details',
            ),
          },
        }}
        historyReverse={boolean('Payment History Reverse?', true, '01 - Main')}
      />
    </>
  );
};
