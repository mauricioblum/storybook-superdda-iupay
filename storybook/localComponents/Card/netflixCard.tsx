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
  DueDateText,
  CardText,
  CnpjText,
  CardValue,
  CurrencyText,
  ValueText,
  BetweenRow,
  PaidText,
} from './styles';

import type { CardProps } from '.';
import { formatDate } from '../utils/formatDate';

const NetflixLogo = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 1280 346"
      width="90"
      height="30"
      fill="#e50914"
    >
      <defs />
      <path d="M0 172.5V345h2.1c1.1 0 8-.9 15.2-2 7.3-1 17-2.4 21.7-3 4.7-.6 10.2-1.3 12.2-1.6l3.8-.6.2-93.8.3-93.8 30.4 89.2c16.7 49 30.7 89.5 31.1 89.9.8.9 54.2-4.7 57.4-5.9 1.4-.6 1.6-16.5 1.6-162V0h-54v97.7c0 53.7-.3 97.3-.7 97-.3-.4-16.2-44.2-35.3-97.5L51.3.5 25.7.2 0 0v172.5zM229 159.5V319l4.3-.5c2.3-.3 15.9-1.4 30.2-2.5 51.7-3.9 103.1-8 108.8-8.6l5.7-.6V255l-2.7.5c-1.6.2-9.5.7-17.8 1-8.2.3-27.8 1.4-43.5 2.5s-29.3 2-30.3 2c-1.6 0-1.7-2.4-1.5-40.3l.3-40.2 22.5-.6c12.4-.4 28.7-.7 36.3-.8l13.7-.1v-53.3l-36.5.6-36.5.7V54h96V0H229v159.5zM413 27v27h56v249.3l12.8-.6c7-.4 19.1-.7 27-.7H523V54h56V0H413v27zM614 149.5V299h53V177h74v-54h-74V54h98V0H614v149.5zM799 151.4v151.3l18.8.7c35.9 1.3 101.5 4.7 119 6.2l7.2.6v-26.6c0-20.6-.3-26.6-1.2-26.6-.7 0-15.7-.9-33.3-2-17.6-1.1-36-2-41-2-4.9 0-10.7-.3-12.7-.6l-3.8-.7V0h-53v151.4zM990 156.9v156.8l11.3.7c14.9.9 34.4 2.5 38.5 3.2l3.2.5V0h-53v156.9zM1090 .5c0 .2 14 36.5 31 80.5 17.1 44 31 80.6 31 81.3 0 .7-15.5 36.5-34.5 79.6-18.9 43.2-34.4 78.6-34.2 78.7.1.1 11.1 1.4 24.5 2.8 13.4 1.5 26.3 3 28.6 3.5l4.3.8 19.3-45.1c10.6-24.8 19.6-45.4 20-45.8.3-.5 9.3 21.7 20 49.1l19.3 49.9 29.3 4.8c16.2 2.6 29.6 4.5 30 4.2.3-.4-14.6-40.9-33.2-90-18.5-49.1-33.7-89.8-33.7-90.4 0-.8 51.8-125.9 64.9-156.7l3.3-7.7-29.5.2-29.5.3-18.7 44.7C1192 69.9 1183.3 90 1183 90c-.3 0-8.4-20.2-18-45l-17.5-45h-28.7c-15.9 0-28.8.2-28.8.5z" />
    </svg>
  );
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

  return (
    <Container style={containerStyle}>
      <Bar color={barColor} />
      <Content>
        <CardHeader>
          <NetflixLogo />
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
