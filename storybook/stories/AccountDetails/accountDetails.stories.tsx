import * as React from 'react';
import { View } from 'react-native';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { callback } from '../../helpers/callback';
import { AccountDetails } from '../../localComponents/AccountDetails';

export default {
  title: 'AccountDetails',
  decorators: [withKnobs],
  parameters: {
    jsx: { skip: 1 },
    appView: { disable: false },
  },
};

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
          ),
          companyName: text('Company Name', 'Nu Pagamentos S.A.'),
          cnpj: text('CNPJ', '18.236.120/0001-58'),
          cardNumber: text('Card Number', '5162 **** **** 9090'),
          isFromIuPay: boolean('Is IuPay?', true),
          isUserAdded: boolean('Is User added?', false),
          authorizedLimit: boolean('Authorized Limit?', false),
          autoPayment: boolean('Auto Payment?', false),
          cardHolderName: text('CardHolder Name', 'Roberto de Oliveira Santos'),
          paymentHistory,
        }}
        historyReverse={boolean('Payment History Reverse?', true)}
      />
    </>
  );
};
