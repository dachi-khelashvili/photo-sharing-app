import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BUTTONSTYLE, PATH } from 'consts';
import {
  EmailInput,
  PasswordInput,
  Container,
  Frame,
  Text,
  Image,
  HGroup,
  RoundButton,
} from 'components';

interface RegisterState {
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterView: React.FC = () => {
  const [state, setState] = useState<RegisterState>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(PATH.COMMUNITY);
  };

  const handleLogin = () => {
    navigate(PATH.LOGIN);
  };

  return (
    <Container>
      <Frame>
        <Image src="./logo.svg" />
        <Text>Sign up for PhotoShare</Text>
        <EmailInput
          label="Email"
          value={state.email}
          onChange={(value) => setState({ ...state, email: value })}
        />
        <PasswordInput
          value={state.password}
          label="Password"
          onChange={(value) => setState({ ...state, password: value })}
        />
        <PasswordInput
          value={state.confirmPassword}
          label="Confirm"
          onChange={(value) => setState({ ...state, confirmPassword: value })}
        />
        <HGroup>
          <RoundButton onClick={handleJoin} style={BUTTONSTYLE.PINK}>
            Join
          </RoundButton>
          <RoundButton onClick={handleLogin} style={BUTTONSTYLE.RED}>
            Back
          </RoundButton>
        </HGroup>
      </Frame>
    </Container>
  );
};
