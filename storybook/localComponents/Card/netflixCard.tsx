import React from 'react';
import {
  Container,
  Bar,
  Content,
  CardHeader,
  CardBody,
  CardFooter,
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
import NumberFormat from 'react-number-format';

import netflixLogo from '../assets/images/netflix-logo.png';
import mailIcon from '../assets/images/mail.png';

import type { CardProps } from '.';

const logoStyle = {
  width: 90,
  height: 30,
};

export const NetflixCard: React.FC<CardProps> = ({
  children,
  value,
  dueDate,
  cnpj,
  text,
  barColor,
  isDue,
  isPaid,
  containerStyle,
  onMailButtonPress,
}) => {
  return (
    <Container style={containerStyle}>
      <Bar color={barColor} />
      <Content>
        <CardHeader>
          <Logo style={logoStyle} source={netflixLogo} resizeMode="contain" />
          <DueDateText isDue={isDue}>{dueDate}</DueDateText>
        </CardHeader>
        <CardBody>
          <BetweenRow>
            {cnpj && <CnpjText>CNPJ: {cnpj}</CnpjText>}
            {isPaid === true && <PaidText>PAGO</PaidText>}
          </BetweenRow>
          <CardText>{text}</CardText>
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
              displayType={'text'}
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
