import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORSTYLE, PATH } from 'consts';
import {
  EmailInput,
  PasswordInput,
  Container,
  Frame,
  Center,
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

  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleJoin = () => {
    goTo(PATH.COMMUNITY);
  };

  const handleLogin = () => {
    goTo(PATH.LOGIN);
  };

  return (
    <Container>
      <Frame>
        <Image src={LogoIcon} />
        <Center>Sign up for FotOz community</Center>
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
