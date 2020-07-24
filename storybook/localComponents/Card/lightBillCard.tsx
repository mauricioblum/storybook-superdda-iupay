import React, { useCallback } from 'react';
import {
  Container,
  Bar,
  Content,
  CardHeader,
  CardBody,
  CardFooter,
  Logo,
  DueDateText,
  BetweenRow,
  CnpjText,
  PaidText,
  MailButton,
  MailIcon,
  CardValue,
  CurrencyText,
  ValueText,
} from './styles';
import NumberFormat from 'react-number-format';

import lightbulb from '../assets/images/lightbulb.png';
import mailIcon from '../assets/images/mail.png';


import type { CardProps } from '.';
import styled from 'styled-components/native';

const logoStyle = {
  width: 40,
  height: 50,
};

const FlagText = styled.Text<{ color: string }>`
  font-family: 'NunitoSans-Bold';
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: ${(props) => props.color};
`;

export const LightBillCard: React.FC<CardProps> = ({
  children,
  value,
  dueDate,
  cnpj,
  text,
  barColor = '#8aa626',
  isDue,
  containerStyle,
  lightBillFlagStatus,
  isPaid,
  onMailButtonPress,
}) => {
  const getFlagColor = useCallback((): string => {
    if (lightBillFlagStatus === 'green') {
      return '#8aa626';
    } else if (lightBillFlagStatus === 'yellow') {
      return '#ebbf10';
    } else {
      return '#e30613';
    }
  }, [lightBillFlagStatus]);

  return (
    <Container style={containerStyle}>
      <Bar color={barColor} />
      <Content>
        <CardHeader>
          <Logo style={logoStyle} source={lightbulb} resizeMode="contain" />
          <DueDateText isDue={isDue}>{dueDate}</DueDateText>
        </CardHeader>
        <CardBody>
          <BetweenRow>
            {cnpj && <CnpjText>CNPJ: {cnpj}</CnpjText>}
            {isPaid === true && <PaidText>PAGO</PaidText>}
          </BetweenRow>
          <FlagText color={getFlagColor()}>{text}</FlagText>
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