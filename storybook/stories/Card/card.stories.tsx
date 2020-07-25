import * as React from 'react';
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Card } from '../../localComponents';
import { callback } from '../../helpers/callback';

export default {
  title: 'Card',
  decorators: [withKnobs],
  parameters: {
    jsx: { skip: 1 },
  },
};

const imgOptions = {
  Netflix:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png',
  Spotify:
    'https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-6.png',
  Nubank:
    'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-5.png',
  RGE: 'https://seeklogo.com/images/R/RGE-logo-9D753BDD88-seeklogo.com.png',
  Empty: null,
};

export const DefaultCard = () => (
  <Card
    cnpj={text('CNPJ', '99.999.999.0001-99')}
    text={text('Card Text', 'Hello Storybook')}
    textColor={color('Text Color', '#666')}
    onMailButtonPress={callback(action('Pressed mail button!'))}
    barColor={color('Bar Color', '#1dd15d')}
    dueDate={new Date()}
    value={number('Card Value/Price', 50)}
    logo={select('Logo Image', imgOptions, imgOptions.Spotify)}
    isPaid={boolean('Is Paid?', false)}
    isDue={boolean('Is Due?', false)}
    isDueText={text('Is Due Text', 'Vencendo hoje')}
    imageWidth={number('Image Width', 77)}
    imageHeight={number('Image Height', 38)}
  />
);

export const NetflixCard = () => (
  <Card
    type="netflix"
    cnpj={text('CNPJ', '99.999.999.0001-99')}
    text={text('Card Text', 'Assinatura Netflix')}
    onMailButtonPress={callback(action('Pressed mail button!'))}
    dueDate={new Date()}
    value={number('Card Value/Price', 50)}
    isDue={boolean('Is Due?', false)}
    isPaid={boolean('Is Paid?', false)}
  />
);

export const LightBillCard = () => (
  <Card
    type="lightBill"
    cnpj={text('CNPJ', '99.999.999.0001-99')}
    text={text('Card Text', 'Cor da Bandeira')}
    onMailButtonPress={callback(action('Pressed mail button!'))}
    dueDate={new Date()}
    value={number('Card Value/Price', 50)}
    isDue={boolean('Is Due?', false)}
    isPaid={boolean('Is Paid?', false)}
    lightBillFlagStatus={select(
      'Flag Status',
      ['green', 'yellow', 'red'],
      'yellow',
    )}
  />
);
