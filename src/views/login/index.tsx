import { COLORSTYLE, PATH } from 'consts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Frame, Center, HGroup, Image, Spacer } from 'components';
import { RoundButton, EmailInput, PasswordInput, TextButton } from 'components';
import LogoIcon from 'assets/images/logo.svg';

interface LoginState {
  email: string;
  password: string;
}

export const LoginView = () => {
  const [state, setState] = useState<LoginState>({ email: '', password: '' });

  const navigate = useNavigate();
  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onClickLogInHandler = () => {
    goTo(PATH.HOME);
  };

  const onClickRegisterHandler = () => {
    goTo(PATH.REGISTER);
  };

  return (
    <Container>
      <Frame>
        <Image src={LogoIcon} />
        <Center>Log in to FotOz community</Center>
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
          <TextButton onClick={() => goTo(PATH.FORGOT_PASSWORD)}>
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
