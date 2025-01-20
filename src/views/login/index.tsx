import { COLORSTYLE, PATH } from 'consts';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Frame, Text, HGroup, Image, Spacer } from 'components';
import { RoundButton, EmailInput, PasswordInput, TextButton } from 'components';
interface LoginViewProps {
  setAuthentication: (e: boolean) => void;
}

interface LoginState {
  email: string;
  password: string;
}

export const LoginView: React.FC<LoginViewProps> = ({ setAuthentication }) => {
  const [state, setState] = useState<LoginState>({ email: '', password: '' });

  const navigate = useNavigate();

  const onClickLogInHandler = () => {
    navigate(PATH.HOME);
    setAuthentication(true);
  };

  const onClickRegisterHandler = () => {
    navigate(PATH.REGISTER);
  };

  return (
    <Container>
      <Frame>
        <Image src="./logo.svg" />
        <Text>Log in to FotOz community</Text>
        <EmailInput
          label="Email"
          value={state.email}
          onChange={(value) => setState({ ...state, email: value })}
        />
        <PasswordInput
          label="Password"
          value={state.password}
          onChange={(value) => setState({ ...state, password: value })}
        />
        <HGroup>
          <Spacer />
          <TextButton onClick={() => navigate(PATH.FORGOT_PASSWORD)}>
            Forget password...
          </TextButton>
        </HGroup>
        <HGroup>
          <RoundButton
            onClick={onClickLogInHandler}
            style={COLORSTYLE.DOGWOOD_ROSE}
          >
            Log in
          </RoundButton>
          <RoundButton
            onClick={onClickRegisterHandler}
            style={COLORSTYLE.DARK_MAGENTA}
          >
            Register
          </RoundButton>
        </HGroup>
      </Frame>
    </Container>
  );
};
