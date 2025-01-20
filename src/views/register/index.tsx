import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORSTYLE, PATH } from 'consts';
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
import LogoIcon from 'assets/images/logo.svg';

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
        <Image src={LogoIcon} />
        <Text>Sign up for FotOz community</Text>
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
          <RoundButton onClick={handleJoin} style={COLORSTYLE.DOGWOOD_ROSE}>
            Join
          </RoundButton>
          <RoundButton onClick={handleLogin} style={COLORSTYLE.DARK_MAGENTA}>
            Back
          </RoundButton>
        </HGroup>
      </Frame>
    </Container>
  );
};
