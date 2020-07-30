import React, { useMemo } from 'react';
import NumberFormat from 'react-number-format';
import { MailIcon, UserCheck, UserX } from '../Icons';
import {
  Container,
  Bar,
  Content,
  CardHeader,
  CardBody,
  CardFooter,
  CardIcons,
  Logo,
  DueDateText,
  CardText,
  CnpjText,
  CardValue,
  CurrencyText,
  ValueText,
  BetweenRow,
  PaidText,
} from './styles';

import netflixLogo from '../assets/images/netflix-logo.png';
import mailIcon from '../assets/images/mail.svg';

import type { CardProps } from '.';
import { formatDate } from '../utils/formatDate';

const logoStyle = {
  width: netflixLogo.data.width * 0.07,
  height: netflixLogo.data.height * 0.085,
};

export const NetflixCard: React.FC<CardProps> = ({
  children,
  value,
  dueDate,
  cnpj,
  text,
  barColor,
  isDue,
  isDueText = 'Vencendo hoje',
  isPaid,
  containerStyle,
  isFromMail,
  isUserAdded,
}) => {
  const formattedDate = useMemo(() => {
    return isDue ? `${isDueText}, ${formatDate(dueDate)}` : formatDate(dueDate);
  }, [dueDate, isDue, isDueText]);

  console.log(netflixLogo);
  console.log(logoStyle);

  return (
    <Container style={containerStyle}>
      <Bar color={barColor} />
      <Content>
        <CardHeader>
          <Logo style={logoStyle} source={netflixLogo} resizeMode="contain" />
          <DueDateText isDue={isDue}>{formattedDate}</DueDateText>
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
          <CardIcons>
            {isFromMail && <MailIcon />}
            {isUserAdded ? <UserCheck /> : <UserX />}
          </CardIcons>
          <CardValue>
            <CurrencyText>R$</CurrencyText>
            <NumberFormat
              value={value}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number): React.ReactNode => (
                <ValueText>{number}</ValueText>
              )}
              decimalScale={2}
              fixedDecimalScale
            />
          </CardValue>
        </CardFooter>
      </Content>
    </Container>
  );
};
