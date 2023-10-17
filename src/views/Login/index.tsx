import { PATH } from 'consts';
import React from 'react';
import {
  Container,
  Frame,
  Input,
  Comment,
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
        <Comment fsize="40px">Log in</Comment>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <SignIn to={PATH.HOME}>Sign in</SignIn>
        <Group>
          <Comment fsize="15px">Don't have an account?</Comment>
          <SignUp to={PATH.REGISTER}>Join PhotoShare</SignUp>
        </Group>
      </Frame>
    </Container>
  );
};
