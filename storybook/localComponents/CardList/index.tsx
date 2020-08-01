import React from 'react';
import { CardListItem, CardListItemProps } from '../CardListItem';
import { Container, ChildrenWrapper } from './styles';

interface CardListProps {
  cards: CardListItemProps[];
  featured?: boolean;
  featuredBackgroundColor?: string;
}

export const CardList: React.FC<CardListProps> = ({
  cards,
  featured,
  featuredBackgroundColor,
  children,
}) => {
  const bgColor =
    featured && featuredBackgroundColor ? featuredBackgroundColor : undefined;

  return (
    <Container
      contentContainerStyle={{
        flex: 1,
        backgroundColor: bgColor,
        padding: 15,
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
          cardTitle={card.cardTitle}
          cardTitleColor={card.cardTitleColor}
        />
      ))}
      {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
    </Container>
  );
};
