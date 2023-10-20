import { PATH } from 'consts';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Frame, Heading, SignUp, Img } from './styles';
import { EmailInput, PasswordInput, BasicInput } from 'components';

export const RegisterView: React.FC = () => {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const navigate = useNavigate();

  const onJoin = () => {
    if (
      fname.length &&
      lname.length &&
      email.length &&
      password.length &&
      confirm.length &&
      password == confirm
    )
      navigate(PATH.LOGIN);
  };

  return (
    <Container>
      <Frame>
        <Img src="./logowithoutletter.png" />
        <Heading>Sign up for PhotoShare</Heading>
        <BasicInput label="First Name" onChange={setFirstName} />
        <BasicInput label="Last Name" onChange={setLastName} />
        <EmailInput onChange={setEmail} />
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
        <SignUp onClick={onJoin}>Sign up</SignUp>
      </Frame>
    </Container>
  );
};
