import * as React from 'react';
import { View, Text } from 'react-native';
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  select,
  object,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { CardList } from '../../localComponents';
import { callback } from '../../helpers/callback';

export default {
  title: 'CardsList',
  decorators: [withKnobs],
  parameters: {
    jsx: { skip: 2 },
    appView: { disable: true },
  },
};

export const Default = () => {
  const cards = [
    {
      dueDate: new Date(Date.now()),
      value: 90.12,
      barColor: '#00529a',
      isPaid: false,
      logo:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/9/93/Embasa.png/1200px-Embasa.png',
      onCardClick: callback(action('Clicked on card')),
    },
    {
      dueDate: new Date(2020, 6, 29),
      value: 2550,
      barColor: '#0d56f3',
      isPaid: false,
      logo:
        'https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-2.png',
    },
    {
      dueDate: new Date(2020, 7, 5),
      value: 812.99,
      barColor: '#e30613',
      isPaid: false,
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/a/a3/Novo_renner.png',
    },
    {
      dueDate: new Date(2020, 7, 5),
      value: 11000,
      barColor: '#999999',
      isPaid: false,
      cardTitle: 'ARNALDO PESSOA LEAL',
      logo:
        'https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          width: 420,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <CardList
          cards={cards}
          featured={boolean('Featured', true)}
          featuredBackgroundColor={color(
            'Featured Background Color',
            '#f78c49',
          )}
          showTotal={boolean('Show Total?', true)}
          totalDueOnly={boolean('Show Total Due Only?', false)}
          totalPaymentText={text(
            'Total Payment text',
            'Valor total dos pagamentos que vencem hoje',
          )}
          totalPaymentTextStyle={object(
            'Total Payment Additional Styles (JSON)',
            {},
          )}
          totalPaymentValueStyle={object(
            'Total Payment Value Additional Styles (JSON)',
            {},
          )}
        />
      </View>
    </View>
  );
};
