import * as React from 'react';
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  select,
} from '@storybook/addon-knobs';
import {
  Card,
  FeaturedCard as FeatureCardComponent,
  BeneficiaryCard as BeneficiaryCardComponent,
} from '../../components';

export default {
  title: 'Cards',
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
    cardTitle={text('Card Title', '')}
    text={text('Card Text', 'Hello Storybook')}
    textColor={color('Text Color', '#666')}
    barColor={color('Bar Color', '#1dd15d')}
    dueDate={new Date()}
    value={number('Card Value/Price', 50)}
    logo={select('Logo Image', imgOptions, imgOptions.Spotify)}
    isFromMail={boolean('Is From Mail?', true)}
    isUserAdded={boolean('Is User Added?', false)}
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
    dueDate={new Date()}
    isFromMail={boolean('Is From Mail?', true)}
    isUserAdded={boolean('Is User Added?', false)}
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
    dueDate={new Date()}
    value={number('Card Value/Price', 50)}
    isFromMail={boolean('Is From Mail?', false)}
    isUserAdded={boolean('Is User Added?', false)}
    isDue={boolean('Is Due?', false)}
    isPaid={boolean('Is Paid?', false)}
    lightBillFlagStatus={select(
      'Flag Status',
      ['green', 'yellow', 'red'],
      'yellow',
    )}
  />
);

export const FeaturedCard = () => (
  <FeatureCardComponent
    cnpj={text('CNPJ', '99.999.999.0001-99')}
    cardTitle={text('Card Title', '')}
    text={text('Card Text', 'Hello Storybook')}
    textColor={color('Text Color', '#666')}
    barColor={color('Bar Color', '#1dd15d')}
    dueDate={new Date()}
    value={number('Card Value/Price', 50)}
    logo={select('Logo Image', imgOptions, imgOptions.Spotify)}
    isFromMail={boolean('Is From Mail?', false)}
    isUserAdded={boolean('Is User Added?', false)}
    isPaid={boolean('Is Paid?', false)}
    isDue={boolean('Is Due?', false)}
    isDueText={text('Is Due Text', 'Vencendo hoje')}
    imageWidth={number('Image Width', 77)}
    imageHeight={number('Image Height', 38)}
  />
);

export const BeneficiaryCard = () => (
  <BeneficiaryCardComponent
    cnpj={text('CNPJ', '99.999.999.0001-99')}
    cardTitle={text('Card Title', 'CERJ')}
    cardTextColor={color('Card Text Color', '#727272')}
    text={text('Card Text', 'Débito automático no dia do vencimento')}
    barColor={color('Bar Color', '#999')}
    limitValue={number('Limit Value', 300)}
    limitValueText={text('Limit Value Text', 'Valor Limite')}
    logo={text(
      'Logo URL',
      'https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png',
    )}
    imageWidth={number('Image Width', 30)}
    imageHeight={number('Image Height', 30)}
    type={select('Card Type', ['Account', 'Monthly'], 'Account')}
    onSwitchChange={(value) => alert(`Changed to ${value}`)}
    isActive
  />
);
