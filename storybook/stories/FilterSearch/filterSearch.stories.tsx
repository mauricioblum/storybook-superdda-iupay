import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { callback } from '../../helpers/callback';
import { FilterSearch } from '../../localComponents/FilterSearch';
import {
  BeneficiaryCard,
  BeneficiaryCardProps,
} from '../../localComponents/BeneficiaryCard';

export default {
  title: 'FilterSearch',
  decorators: [withKnobs],
  parameters: {
    jsx: { skip: 0 },
    appView: { bgColor: '#f7f5f4' },
  },
};

const beneficiaryCards: BeneficiaryCardProps[] = [
  {
    barColor: '#999',
    cardTextColor: '#727272',
    cardTitle: 'LERJ',
    isActive: true,
    cnpj: '99.999.999.0001-99',
    imageHeight: 30,
    imageWidth: 30,
    containerStyle: { marginTop: 10 },
    limitValue: 300,
    limitValueText: 'Valor Limite',
    logo:
      'https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png',
    text: 'Débito automático no dia do vencimento',
    type: 'Account',
  },
  {
    barColor: '#999',
    cardTextColor: 'darkgreen',
    cardTitle: 'BERJ',
    cnpj: '99.999.999.0001-99',
    imageHeight: 30,
    imageWidth: 30,
    isActive: false,
    containerStyle: { marginTop: 10 },
    limitValue: 300,
    limitValueText: 'Valor Limite',
    logo:
      'https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png',
    text: 'Débito automático no dia do vencimento',
    type: 'Account',
  },
  {
    barColor: '#999',
    isActive: true,
    cardTextColor: '#727272',
    cardTitle: 'CERJ',
    cnpj: '99.999.999.0001-99',
    imageHeight: 30,
    imageWidth: 30,
    containerStyle: { marginTop: 10 },
    limitValue: 300,
    limitValueText: 'Valor Limite',
    logo:
      'https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png',
    text: 'Débito automático no dia do vencimento',
    type: 'Monthly',
  },
  {
    barColor: '#999',
    cardTextColor: 'red',
    cardTitle: 'AES SUL',
    cnpj: '99.999.999.0001-99',
    imageHeight: 30,
    imageWidth: 30,
    isActive: true,
    containerStyle: { marginTop: 10 },
    limitValue: 300,
    limitValueText: 'Valor Limite',
    logo:
      'https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png',
    text: 'Débito automático no dia do vencimento',
    type: 'Account',
  },
];

export const Default = () => {
  const [cards, setCards] = React.useState([...beneficiaryCards]);
  const [searchStr, setSearchStr] = React.useState('');

  function handleSortAsc() {
    const sortedCards = [...cards];

    setCards(
      sortedCards.sort((a, b) => {
        if (a.cardTitle && b.cardTitle) {
          return a.cardTitle > b.cardTitle ? 1 : -1;
        }
        return -1;
      }),
    );
  }

  function handleSortDesc() {
    const sortedCards = [...cards];

    setCards(
      sortedCards.sort((a, b) => {
        if (a.cardTitle && b.cardTitle) {
          return a.cardTitle > b.cardTitle ? -1 : 1;
        }
        return -1;
      }),
    );
  }

  function handleSearch(search: string) {
    if (search === '') {
      setCards([...beneficiaryCards]);
      return;
    }

    setCards(
      beneficiaryCards.filter((card) => {
        if (card.cardTitle) {
          return card.cardTitle.toLowerCase().includes(search.toLowerCase());
        }
        return [];
      }),
    );
  }

  function handleSearchIconClick() {
    handleSearch('');
    setSearchStr('');
  }

  return (
    <ScrollView
      style={{ flex: 1, marginTop: 20, width: '100%' }}
      showsVerticalScrollIndicator={false}
    >
      <FilterSearch
        searchValue={searchStr}
        orderText={text('Order Text', 'Ordernar por')}
        onClickDesc={() => handleSortDesc()}
        onClickAsc={() => handleSortAsc()}
        onSearch={() => handleSearch(searchStr)}
        onSearchIconClick={() => handleSearchIconClick()}
        onChangeSearchValue={(value) => setSearchStr(value)}
      />
      {cards.map((card, index) => (
        <BeneficiaryCard
          key={index}
          barColor={card.barColor}
          cardTextColor={card.cardTextColor}
          cardTitle={card.cardTitle}
          cnpj={card.cnpj}
          imageHeight={card.imageHeight}
          imageWidth={card.imageWidth}
          containerStyle={card.containerStyle}
          limitValue={card.limitValue}
          limitValueText={card.limitValueText}
          logo={card.logo}
          text={card.text}
          type={card.type}
          isActive={card.isActive}
        />
      ))}
    </ScrollView>
  );
};
