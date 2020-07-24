
import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '../helpers/storiesOf';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import AppView from './AppView';

import { Card } from 'react-native-superdda-iupay';
import { Card as LocalCard } from '../localComponents';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button Test</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

const imgOptions = {
    Netflix: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png',
    Spotify: 'https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-6.png',
    Nubank: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-5.png',
    RGE: 'https://seeklogo.com/images/R/RGE-logo-9D753BDD88-seeklogo.com.png',
    Empty: null,
  };

storiesOf('Card', module)
.addDecorator(getStory => <AppView>{getStory()}</AppView>)
.addDecorator(withKnobs)
.addDecorator(jsxDecorator)
.add('default', () => (
  <Card
    cnpj={text('CNPJ', '99.999.999.0001-99')}
    text={text('Card Text', 'Hello Storybook')}
    textColor={color('Text Color', '#666')}
    onMailButtonPress={action('Pressed mail button!')}
    barColor={color('Bar Color', '#ff9000')}
    dueDate="29 JUL"
    value={number('Card Value/Price', 50)}
  />
))
.add('Local Default', () => (
  <LocalCard
    cnpj={text('CNPJ', '99.999.999.0001-99')}
    text={text('Card Text', 'Hello Storybook')}
    textColor={color('Text Color', '#666')}
    onMailButtonPress={action('Pressed mail button!')}
    barColor={color('Bar Color', '#ff9000')}
    dueDate="29 JUL"
    value={number('Card Value/Price', 50)}
    logo={select('Logo Image', imgOptions, imgOptions.Netflix)}
  />
))
