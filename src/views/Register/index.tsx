import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'consts';
import { EmailInput, PasswordInput, BasicInput } from 'components';
import { IRegisterUserInfo } from 'types';
import { Container, Frame, Heading, SignUp, Img } from './styles';

export const RegisterView: React.FC = () => {
  const [registerUserInfo, setRegisterUserInfo] = useState<IRegisterUserInfo>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const onJoin = () => {
    if (
      registerUserInfo.firstName.length &&
      registerUserInfo.lastName.length &&
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

  return (
    <Container>
      <Frame>
        <Img src="./logo.svg" />
        <Heading>Sign up for PhotoShare</Heading>
        <BasicInput
          label="First Name"
          onChange={(newValue) =>
            onRegisterUserInfoChange('firstName', newValue)
          }
        />
        <BasicInput
          label="Last Name"
          onChange={(newValue) =>
            onRegisterUserInfoChange('lastName', newValue)
          }
        />
        <EmailInput
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
        <SignUp onClick={onJoin}>Sign up</SignUp>
      </Frame>
    </Container>
  );
};
