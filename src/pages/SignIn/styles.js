import {Platform} from 'react-native';
import styled from 'styled-components/native';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const ImageView = styled.View`
  align-items: center;
  margin-bottom: 72px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
export const Input = styled(TextInput)`
  border-bottom-width: 1px;
  border-bottom-color: #888;
  margin-bottom: 36px;
`;

export const FormButton = styled(Button)`
  margin-top: 14px;
`;
