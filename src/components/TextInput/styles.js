import styled from 'styled-components/native';

export const Container = styled.View`
  height: 46px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderColor: '#333',
})`
  flex: 1;
  font-size: 15px;
  color: #000;
`;
