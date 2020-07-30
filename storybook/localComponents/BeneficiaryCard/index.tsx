import React, { useMemo } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import NumberFormat from 'react-number-format';
import { MailIcon, UserCheck, UserX } from '../Icons';
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
  CardTypeText,
  CardInfoBlock,
  CardText,
  LimitValueText,
  CnpjText,
  BetweenRow,
} from './styles';

type CardType = 'Account' | 'Monthly';

interface BeneficiaryCardProps {
  barColor?: string;
  cardTitle?: string;
  cardTextColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  cnpj?: string;
  isActive?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  limitValue?: number;
  limitValueText?: string;
  logo?: string;
  text?: string;
  type?: CardType;
}

export const BeneficiaryCard: React.FC<BeneficiaryCardProps> = ({
  barColor,
  cardTitle,
  cardTextColor,
  children,
  containerStyle,
  cnpj,
  isActive,
  logo,
  limitValue,
  limitValueText = 'Valor Limite',
  imageWidth,
  imageHeight,
  text,
  type,
}) => {
  const logoStyle = {
    width: imageWidth || 90,
    height: imageHeight || 30,
  };

  const cardTypeText = useMemo(() => {
    return type === 'Account' ? 'Conta' : 'Mensalidade';
  }, [type]);

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
          <CardTypeText color={cardTextColor}>{cardTypeText}</CardTypeText>
        </CardHeader>
        <CardBody>
          <BetweenRow>{cnpj && <CnpjText>CNPJ: {cnpj}</CnpjText>}</BetweenRow>
        </CardBody>
        <CardFooter>
          <CardInfoBlock>
            <CardText style={{ color: cardTextColor }}>{text}</CardText>
            <NumberFormat
              value={limitValue}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              renderText={(number) => (
                <LimitValueText>{`${limitValueText}: R$${number}`}</LimitValueText>
              )}
              decimalScale={2}
              fixedDecimalScale
            />
            {children}
          </CardInfoBlock>
        </CardFooter>
      </Content>
    </Container>
  );
};
