import React from 'react';
import type { StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
import { NetflixCard } from './netflixCard';
import { LightBillCard } from './lightBillCard';
import { DefaultCard } from './defaultCard';

export type CardType = 'netflix' | 'nubank' | 'lightBill' | 'default';

export interface CardProps {
  type?: CardType;
  logo?: string | null;
  value?: number;
  dueDate?: string;
  cnpj?: string;
  cardTitle?: string;
  text?: string | JSX.Element;
  textColor?: string;
  barColor?: string;
  isDue?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  isPaid?: boolean;
  onMailButtonPress?(): void;
  lightBillFlagStatus?: 'green' | 'yellow' | 'red';
}

export const Card: React.FC<CardProps> = (props) => {
  switch (props.type) {
    case 'netflix':
      return <NetflixCard {...props} />;
    case 'lightBill':
      return <LightBillCard {...props} />;
    case 'default':
      return <DefaultCard {...props} />;
    default:
      return <DefaultCard {...props} />;
  }
};
