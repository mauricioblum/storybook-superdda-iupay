import React, { useMemo } from 'react';
import NumberFormat from 'react-number-format';
import { isToday } from 'date-fns';
import { CardListItem, CardListItemProps } from '../CardListItem';
import {
  Container,
  ChildrenWrapper,
  TotalPaymentText,
  TotalPaymentTextValue,
} from './styles';

interface CardListProps {
  cards: CardListItemProps[];
  featured?: boolean;
  featuredBackgroundColor?: string;
  showTotal?: boolean;
  totalDueOnly?: boolean;
  totalPaymentText?: string;
  totalPaymentTextStyle?: object;
  totalPaymentValueStyle?: object;
}

export const CardList: React.FC<CardListProps> = ({
  cards,
  featured,
  featuredBackgroundColor,
  showTotal,
  totalDueOnly,
  totalPaymentText = 'Valor total dos pagamentos que vencem hoje',
  totalPaymentTextStyle,
  totalPaymentValueStyle,
}) => {
  const bgColor =
    featured && featuredBackgroundColor ? featuredBackgroundColor : undefined;

  const totalPaymentValue = useMemo(() => {
    if (totalDueOnly) {
      const cardsDueOnly = cards.filter((card) => isToday(card.dueDate));
      return cardsDueOnly.reduce((acc, { value }) => acc + value, 0);
    }
    return cards.reduce((acc, { value }) => acc + value, 0);
  }, [cards, totalDueOnly]);

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
      {showTotal && (
        <ChildrenWrapper>
          <TotalPaymentText style={totalPaymentTextStyle}>
            {totalPaymentText}
            {`: R$ `}
            <NumberFormat
              value={totalPaymentValue}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => (
                <TotalPaymentTextValue style={totalPaymentValueStyle}>
                  {number}
                </TotalPaymentTextValue>
              )}
              decimalScale={2}
              fixedDecimalScale
            />
          </TotalPaymentText>
        </ChildrenWrapper>
      )}
    </Container>
  );
};
