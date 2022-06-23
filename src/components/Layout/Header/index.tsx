import React from 'react';

import auth from '@react-native-firebase/auth';

import { LogoutButton } from '@components/Controllers/LogoutButton';
import { Container, Greeting, Title, SubTitle } from './styles';

export function Header() {
  function handleSignOut() { 
    auth().signOut();
  }

  return (
    <Container>
      <Greeting>
        <Title>Minhas Despesas</Title>
        <SubTitle>Cadastre suas despesas</SubTitle>
      </Greeting>

      <LogoutButton onPress={handleSignOut} />
    </Container>
  );
}