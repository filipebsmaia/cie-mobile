import React from 'react';
import {Image} from 'react-native';

import {Form} from '@unform/mobile';
import logo from '~/assets/logo.svg';

import Background from '~/components/Background';
import {Container, ImageView, Input, Text, FormButton} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <ImageView>
          <Image source={logo} />
        </ImageView>
        <Form
          onSubmit={data => {
            // eslint-disable-next-line no-console
            console.log(data);
          }}>
          <Text>E-MAIL</Text>
          <Input
            name="email"
            type="email"
            icon="mail-outline"
            placeholder="Digite seu email"
          />
          <Text>SENHA</Text>
          <Input
            name="email"
            type="email"
            icon="lock-outline"
            placeholder="Digite sua senha"
          />
          <FormButton>Entrar</FormButton>
          <FormButton color="#7159c1">Ainda não tenho conta</FormButton>
        </Form>
      </Container>
    </Background>
  );
}
