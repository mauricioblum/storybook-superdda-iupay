import React from 'react';
import { View, Modal, Alert } from 'react-native';
import { CloseCircle } from '../Icons';
import {
  Container,
  ModalHeader,
  ModalRow,
  CloseModalButton,
  ModalTitle,
  ModalContent,
  ModalWebContainer,
  Title,
  ModalText,
} from './styles';

export interface AccountDetailsModalProps {
  title?: string;
  companyName?: string;
  cnpj?: string;
  cardNumber?: string;
  clientName?: string;
  month?: number;
  value?: number;
  dueDate?: Date;
  emissionDate?: Date;
  minimumPaymentValue?: number;
  totalLimit?: number;
  totalWithdrawLimit?: number;
  interestRate?: number;
  interestRateCET?: number;
  interestInstallmentRate?: number;
  interestInstallmentRateCET?: number;
  isOpen: boolean;
  onClickClose: () => void;
  renderMobile: boolean;
}

const renderModal = (props: AccountDetailsModalProps): JSX.Element => {
  const { isOpen, title, onClickClose, companyName, cnpj, cardNumber } = props;

  return isOpen ? (
    <ModalWebContainer>
      <ModalHeader>
        <ModalRow>
          <ModalTitle>{title}</ModalTitle>
          <CloseModalButton onPress={onClickClose}>
            <CloseCircle size={24} />
          </CloseModalButton>
        </ModalRow>
      </ModalHeader>
      <ModalContent>
        <Title>{companyName}</Title>
        <ModalText>CNPJ {cnpj}</ModalText>
        <ModalText>Cartão {cardNumber}</ModalText>
      </ModalContent>
    </ModalWebContainer>
  ) : (
    <View />
  );
};

const AccountDetailsModal: React.FC<AccountDetailsModalProps> = (props) => {
  const { renderMobile, isOpen, title } = props;

  return renderMobile ? (
    <Container>
      <Modal
        animationType="slide"
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <Container>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <ModalTitle>{title}</ModalTitle>
            <ModalTitle>{title}</ModalTitle>
            <ModalTitle>{title}</ModalTitle>
            <ModalTitle>{title}</ModalTitle>
          </ModalContent>
        </Container>
      </Modal>
    </Container>
  ) : (
    renderModal(props)
  );
};

export default AccountDetailsModal;
