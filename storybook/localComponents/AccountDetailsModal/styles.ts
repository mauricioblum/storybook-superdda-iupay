import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalHeader = styled.View`
  width: 100%;
  height: 41px;
  padding: 11px 11px 11px 27px;
  background-color: #f7f5f4;
  justify-content: center;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const ModalRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CloseModalButton = styled.TouchableOpacity``;

export const ModalTitle = styled.Text`
  font-family: 'NunitoSans-Bold';
  font-size: 15px;
  line-height: 1;
  color: #727272;
`;

export const ModalContent = styled.View`
  margin: 20px;
  background-color: #fff;
  flex: 1;
`;

export const ModalWebContainer = styled.View`
  width: 359px;
  min-height: 500px;
  background: #fff;
  background-color: #fff;
  border-radius: 5px;
  z-index: 500;
  position: absolute;
  top: 10%;
  left: 4%;
`;

export const Title = styled.Text`
  font-family: 'NunitoSans-SemiBold';
  font-size: 15px;
  line-height: 24px;
  color: #f78c49;
`;

export const ModalText = styled.Text`
  font-family: 'NunitoSans-Regular';
  font-size: 15px;
  color: #727272;
`;
