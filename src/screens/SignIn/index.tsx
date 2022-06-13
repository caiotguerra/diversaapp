import React from 'react';
import { KeyboardAvoidingView, Platform, Text } from 'react-native';
import { SignInForm } from '@components/Forms/SignInForm';
import { Container, Content } from './styles';
import  Logo  from '@components/Logo';
import Autoria from '@components/Autoria';

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
        <Logo />
          <SignInForm />
        </Content>
      </KeyboardAvoidingView>
      <Autoria />
    </Container>
  );
}