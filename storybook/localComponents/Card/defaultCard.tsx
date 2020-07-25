import React, { useMemo } from 'react';
import NumberFormat from 'react-number-format';
import { formatDate } from '../utils/formatDate';
import {
  Container,
  Bar,
  Content,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitleContainer,
  CardTitle,
  Logo,
  DueDateText,
  CardText,
  CnpjText,
  MailButton,
  MailIcon,
  CardValue,
  CurrencyText,
  ValueText,
  BetweenRow,
  PaidText,
} from './styles';

import mailIcon from '../assets/images/mail.png';

import type { CardProps } from '.';

export const DefaultCard: React.FC<CardProps> = ({
  children,
  value,
  dueDate,
  cnpj,
  cardTitle,
  text,
  textColor,
  barColor,
  isDue,
  isDueText = 'Vencendo hoje',
  isPaid,
  containerStyle,
  onMailButtonPress,
  logo,
  imageWidth,
  imageHeight,
}) => {
  const logoStyle = {
    width: imageWidth || 90,
    height: imageHeight || 30,
  };

  const formattedDate = useMemo(() => {
    return isDue ? `${isDueText}, ${formatDate(dueDate)}` : formatDate(dueDate);
  }, [dueDate, isDue, isDueText]);

  return (
    <Container style={containerStyle}>
      <Bar color={barColor} />
      <Content>
        <CardHeader>
          <CardTitleContainer>
            {logo && (
              <Logo
                style={logoStyle}
                source={{ uri: logo }}
                resizeMode="contain"
                resizeMethod="resize"
              />
            )}
            <CardTitle>{cardTitle}</CardTitle>
          </CardTitleContainer>
          <DueDateText isDue={isDue}>{formattedDate}</DueDateText>
        </CardHeader>
        <CardBody>
          <BetweenRow>
            {cnpj && <CnpjText>CNPJ: {cnpj}</CnpjText>}
            {isPaid === true && <PaidText>PAGO</PaidText>}
          </BetweenRow>
          <CardText style={{ color: textColor }}>{text}</CardText>
          {children}
        </CardBody>
        <CardFooter>
          <MailButton onPress={onMailButtonPress}>
            <MailIcon source={mailIcon} />
          </MailButton>
          <CardValue>
            <CurrencyText>R$</CurrencyText>
            <NumberFormat
              value={value}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => <ValueText>{number}</ValueText>}
              decimalScale={2}
              fixedDecimalScale
            />
          </CardValue>
        </CardFooter>
      </Content>
    </Container>
  );
};
