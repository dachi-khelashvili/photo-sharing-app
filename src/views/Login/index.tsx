import { PATH } from 'consts';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Frame,
  Comment,
  Heading,
  SignIn,
  SignUp,
  Group,
  Img,
} from './styles';
import { EmailInput, PasswordInput } from 'components';

export const LoginView: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSignIn = () => {
    if (email.length > 0 && password.length > 0) navigate(PATH.HOME);
  };
  return (
    <Container>
      <Frame>
        <Img src="./logowithoutletter.png" />
        <Heading>Log in to PhotoShare</Heading>
        <EmailInput
          onChange={(e) => {
            setEmail(e);
          }}
        ></EmailInput>
        <PasswordInput
          value={password}
          validate={false}
          label="Password"
          onChange={(e) => {
            setPassword(e);
          }}
        ></PasswordInput>
        <SignIn onClick={onSignIn}>Sign in</SignIn>
        <Group>
          <Comment>Don't have an account?</Comment>
          <SignUp to={PATH.REGISTER}>Sign up here.</SignUp>
        </Group>
      </Frame>
    </Container>
  );
};
