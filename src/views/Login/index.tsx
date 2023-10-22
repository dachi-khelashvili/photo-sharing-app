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

  const onClickSignInHandler = () => {
    console.log(email + password);
    if (email.length && password.length) navigate(PATH.GALLERY);
  };

  return (
    <Container>
      <Frame>
        <Img src="./logo.svg" />
        <Heading>Log in to PhotoShare</Heading>
        <EmailInput onChange={setEmail} />
        <PasswordInput
          value={password}
          isValidatable={false}
          label="Password"
          onChange={setPassword}
        />
        <SignIn onClick={onClickSignInHandler}>Sign in</SignIn>
        <Group>
          <Comment>Don't have an account?</Comment>
          <SignUp to={PATH.REGISTER}>Sign up here.</SignUp>
        </Group>
      </Frame>
    </Container>
  );
};
