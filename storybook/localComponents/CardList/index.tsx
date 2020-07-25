import React from 'react';
import { CardListItem, CardListItemProps } from '../CardListItem';
import { Container } from './styles';

interface CardListProps {
  cards: CardListItemProps[];
}

export const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <Container
      contentContainerStyle={{
        flex: 1,
      }}
    >
      {cards.map((card, index) => (
        <CardListItem
          key={index}
          value={card.value}
          dueDate={card.dueDate}
          barColor={card.barColor}
          logo={card.logo}
          isPaid={card.isPaid}
        />
      ))}
    </Container>
  );
};
