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
    console.log({ fname, lname, email, password, confirm });
    if (
      fname.length &&
      lname.length &&
      email.length &&
      password.length &&
      confirm.length
    )
      if (password == confirm) navigate(PATH.LOGIN);
  };

  return (
    <Container>
      <Frame>
        <Img src="./logowithoutletter.png" />
        <Heading>Sign up for PhotoShare</Heading>
        <BasicInput
          label="First Name"
          onChange={(e) => {
            setFirstName(e);
          }}
        ></BasicInput>
        <BasicInput
          label="Last Name"
          onChange={(e) => {
            setLastName(e);
          }}
        ></BasicInput>
        <EmailInput
          onChange={(e) => {
            setEmail(e);
          }}
        ></EmailInput>
        <PasswordInput
          value={password}
          label="Password"
          validate={true}
          onChange={(e) => {
            setPassword(e);
          }}
        ></PasswordInput>
        <PasswordInput
          value={confirm}
          label="Confirm"
          validate={false}
          onChange={(e) => {
            setConfirm(e);
          }}
        ></PasswordInput>
        <SignUp onClick={onJoin}>Sign up</SignUp>
      </Frame>
    </Container>
  );
};
