import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'consts';
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
import { IRegisterUserInfo } from 'types';

export const RegisterView: React.FC = () => {
  const [registerUserInfo, setRegisterUserInfo] = useState<IRegisterUserInfo>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const onClickJoinAlerter = () => {
    if (
      registerUserInfo.email.length &&
      registerUserInfo.password.length &&
      registerUserInfo.confirmPassword.length &&
      registerUserInfo.password == registerUserInfo.confirmPassword
    ) {
      navigate(PATH.LOGIN);
    }
  };

  const onRegisterUserInfoChange = (field: string, newValue: string) => {
    setRegisterUserInfo({
      ...registerUserInfo,
      [field]: newValue,
    });
  };

  const onClickLoginAlerter = () => {
    navigate(PATH.LOGIN);
  };

  return (
    <Container>
      <Frame>
        <Img src="./logo.svg" />
        <Heading>Sign up for PhotoShare</Heading>
        <EmailInput
          value={registerUserInfo.email}
          onChange={(newValue) => onRegisterUserInfoChange('email', newValue)}
        />
        <PasswordInput
          value={registerUserInfo.password}
          label="Password"
          isValidatable={true}
          onChange={(newValue) =>
            onRegisterUserInfoChange('password', newValue)
          }
        />
        <PasswordInput
          value={registerUserInfo.confirmPassword}
          label="Confirm"
          isValidatable={false}
          onChange={(newValue) =>
            onRegisterUserInfoChange('confirmPassword', newValue)
          }
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
