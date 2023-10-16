import React from 'react';
import { Container, Content, GoToLink } from './styles';
import { PATH } from 'consts';

export const HomeView: React.FC = () => {
  return (
    <Container>
      <Content>Welcome to Homepage!!!</Content>
      <GoToLink to={PATH.LOGIN}>Log in</GoToLink>
      <GoToLink to={PATH.REGISTER}>Register</GoToLink>
    </Container>
  );
};
