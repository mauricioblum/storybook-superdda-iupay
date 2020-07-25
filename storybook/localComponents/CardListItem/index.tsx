import React, { useMemo, useState, useEffect } from 'react';
import { Image } from 'react-native';
import NumberFormat from 'react-number-format';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Bar,
  Content,
  CardRow,
  LogoWrapper,
  Logo,
  CardInfo,
  DueDateText,
  ValueText,
} from './styles';

export interface CardListItemProps {
  dueDate: Date;
  value: number;
  logo?: string;
  barColor?: string;
  isPaid?: boolean;
  onCardClick?: () => void;
}

export const CardListItem: React.FC<CardListItemProps> = ({
  barColor,
  dueDate,
  value,
  logo,
  onCardClick,
}) => {
  const [logoWidth, setLogoWidth] = useState(0);
  const [logoHeight, setLogoHeight] = useState(0);

  const formattedDate = useMemo(() => {
    const weekDay = format(dueDate, "EEEE',' ", {
      locale: ptBR,
    });

    const dayOfMonth = format(dueDate, 'dd MMM', {
      locale: ptBR,
    });

    return (
      weekDay.charAt(0).toUpperCase() +
      weekDay.slice(1) +
      dayOfMonth.toUpperCase()
    );
  }, [dueDate]);

  useEffect(() => {
    if (logo) {
      Image.getSize(
        logo,
        (width, height) => {
          setLogoWidth(width);
          setLogoHeight(height);
        },
        () => null,
      );
    }
  }, [logo]);

  return (
    <Container
      onPress={onCardClick}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 2.65,
        elevation: 7,
      }}
    >
      <Bar color={barColor} />
      <Content>
        <CardRow>
          <LogoWrapper>
            <Logo
              style={{ width: logoWidth, height: logoHeight }}
              source={{ uri: logo }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </LogoWrapper>
          <CardInfo>
            <DueDateText>{formattedDate}</DueDateText>
            <NumberFormat
              value={value}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => <ValueText>R$ {number}</ValueText>}
              decimalScale={2}
              fixedDecimalScale
            />
          </CardInfo>
        </CardRow>
      </Content>
    </Container>
  );
};
