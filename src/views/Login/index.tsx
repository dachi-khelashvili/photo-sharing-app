import { PATH } from 'consts';
import React from 'react';
import {
  Container,
  Frame,
  Input,
  Comment,
  Heading,
  SignIn,
  SignUp,
  Group,
  Img,
} from './styles';

export const LoginView: React.FC = () => {
  return (
    <Container>
      <Frame>
        <Img src="./logo.png" />
        <Heading>Log in</Heading>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <SignIn to={PATH.HOME}>Sign in</SignIn>
        <Group>
          <Comment>Don't have an account?</Comment>
          <SignUp to={PATH.REGISTER}>Join PhotoShare</SignUp>
        </Group>
      </Frame>
    </Container>
  );
};
