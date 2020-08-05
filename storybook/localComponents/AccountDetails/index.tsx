import React, { useCallback, useMemo, useState } from 'react';
import NumberFormat from 'react-number-format';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
  WrapperView,
  Container,
  Header,
  Logo,
  BackButton,
  OptionsButton,
  TitleWrapper,
  Title,
  IconsWrapper,
  BlockView,
  InfoBlock,
  ValueTitle,
  ValueDescription,
  ValueActive,
  CardHolderContainer,
  CardHolderCard,
  CardHolderText,
  CardHolderButton,
  CardHolderButtonText,
  ViewAccountDetailsButton,
  ViewAccountDetailsButtonText,
  PaymentHistoryContainer,
  PaymentHistoryTitle,
  PaymentHistoryData,
  PaymentHistoryItem,
  PaymentMonth,
  PaymentValueInfo,
  PaymentCurrency,
  PaymentValue,
} from './styles';
import {
  ChevronLeft,
  MoreVertical,
  IuPayIcon,
  UserCheck,
  UserX,
} from '../Icons';
import AccountDetailsModal from '../AccountDetailsModal';

export interface PaymentHistoryItem {
  date: string;
  value: number;
}

export interface AccountDetailsInfoProps {
  companyName?: string;
  companyLogo?: string;
  cnpj?: string;
  cardNumber?: string;
  autoPayment?: boolean;
  authorizedLimit?: boolean;
  cardHolderName?: string;
  paymentHistory?: PaymentHistoryItem[];
  isFromIuPay?: boolean;
  isUserAdded?: boolean;
}

export interface AccountDetailsProps {
  data: AccountDetailsInfoProps;
  historyReverse?: boolean;
  onClickBack?: () => void;
  onClickOptions?: () => void;
  onClickViewCard?: () => void;
  onClickViewAccountDetails?: () => void;
}

export const AccountDetails: React.FC<AccountDetailsProps> = ({
  onClickBack,
  onClickOptions,
  onClickViewCard,
  onClickViewAccountDetails,
  data,
  historyReverse,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const paymentHistory = useMemo(() => {
    if (data.paymentHistory) {
      return historyReverse
        ? data.paymentHistory.reverse()
        : [...data.paymentHistory];
    }
    return [];
  }, [data.paymentHistory, historyReverse]);

  const formatDate = useCallback((date: string) => {
    const splitDate = date.split('-');

    const formattedDate = new Date(
      Number(splitDate[0]),
      Number(splitDate[1]) - 1,
    );

    return format(formattedDate, 'MMMM yyyy', { locale: ptBR });
  }, []);

  return (
    <WrapperView>
      <Container>
        <Header>
          <BackButton onPress={onClickBack}>
            <ChevronLeft />
          </BackButton>
          <Logo source={{ uri: data.companyLogo }} resizeMode="contain" />
          <OptionsButton onPress={onClickOptions}>
            <MoreVertical />
          </OptionsButton>
        </Header>
        <TitleWrapper>
          <Title>{data.companyName}</Title>
          <IconsWrapper>
            {data.isFromIuPay && <IuPayIcon />}
            {data.isUserAdded ? <UserCheck /> : <UserX color="#c1272d" />}
          </IconsWrapper>
        </TitleWrapper>

        <BlockView>
          <InfoBlock>
            <ValueTitle>CNPJ: </ValueTitle>
            <ValueDescription>{data.cnpj}</ValueDescription>
          </InfoBlock>
          <InfoBlock>
            <ValueTitle>Cartão {data.cardNumber}</ValueTitle>
          </InfoBlock>
        </BlockView>

        <BlockView>
          <InfoBlock>
            <ValueTitle>Pagamento Automático: </ValueTitle>
            <ValueActive>
              {data.autoPayment ? 'Ativado' : 'Desativado'}
            </ValueActive>
          </InfoBlock>
          <InfoBlock>
            <ValueTitle>Limite de Autorização: </ValueTitle>
            <ValueActive>
              {data.authorizedLimit ? 'Ativado' : 'Desativado'}
            </ValueActive>
          </InfoBlock>
        </BlockView>

        <CardHolderContainer>
          <CardHolderCard>
            <CardHolderText>{data.cardHolderName}</CardHolderText>
            <CardHolderButton onPress={onClickViewCard}>
              <CardHolderButtonText>Acessar cartão</CardHolderButtonText>
            </CardHolderButton>
          </CardHolderCard>
        </CardHolderContainer>

        <BlockView>
          <ViewAccountDetailsButton onPress={() => setModalOpen(!modalOpen)}>
            <ViewAccountDetailsButtonText>
              Ver detalhes da conta
            </ViewAccountDetailsButtonText>
          </ViewAccountDetailsButton>
        </BlockView>

        <PaymentHistoryContainer>
          <PaymentHistoryTitle>Histórico de Pagamentos</PaymentHistoryTitle>

          <PaymentHistoryData>
            {paymentHistory.map((item) => (
              <PaymentHistoryItem key={item.date}>
                <PaymentMonth>{formatDate(item.date)}</PaymentMonth>
                <PaymentValueInfo>
                  <PaymentCurrency>R$ </PaymentCurrency>
                  <NumberFormat
                    value={item.value}
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                    renderText={(number) => (
                      <PaymentValue>{number}</PaymentValue>
                    )}
                    decimalScale={2}
                    fixedDecimalScale
                  />
                </PaymentValueInfo>
              </PaymentHistoryItem>
            ))}
          </PaymentHistoryData>
        </PaymentHistoryContainer>
      </Container>
      <AccountDetailsModal
        isOpen={modalOpen}
        title="Detalhes da conta"
        renderMobile={false}
        onClickClose={() => setModalOpen(false)}
        companyName={data.companyName}
        cnpj={data.cnpj}
        cardNumber={data.cardNumber}
        clientName={data.cardHolderName}
      />
    </WrapperView>
  );
};

export default AccountDetails;
