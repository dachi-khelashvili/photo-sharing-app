import { PATH } from 'consts';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Frame,
  Heading,
  Img,
  LoginButton,
  RegisterButton,
  Group,
} from '../Login/styles';
import { EmailInput, PasswordInput } from 'components';

export const RegisterView: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const navigate = useNavigate();

  const onClickJoinAlerter = () => {
    if (
      email.length &&
      password.length &&
      confirm.length &&
      password == confirm
    )
      navigate(PATH.LOGIN);
  };

  const onClickLoginAlerter = () => {
    navigate(PATH.LOGIN);
  };

  return (
    <Container>
      <Frame>
        <Img src="./logo.svg" />
        <Heading>
          Sign up to <b>PHOTOSHARE</b>
        </Heading>
        <EmailInput onChange={setEmail} value={email.substring(1)} />
        <PasswordInput
          label="Password"
          isValidatable={true}
          onChange={setPassword}
        />
        <PasswordInput
          label="Confirm"
          isValidatable={false}
          onChange={setConfirm}
        />
        <Group>
          <RegisterButton onClick={onClickJoinAlerter}>Join</RegisterButton>
          <LoginButton onClick={onClickLoginAlerter}>
            Back to Log in
          </LoginButton>
        </Group>
      </Frame>
    </Container>
  );
};
