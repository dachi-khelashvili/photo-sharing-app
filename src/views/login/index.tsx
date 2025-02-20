import { COLORSTYLE, PATH } from 'consts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Frame, Center, HGroup, Image, Spacer } from 'components';
import { RoundButton, PasswordInput, TextButton } from 'components';
import LogoIcon from 'assets/images/logo.svg';
import { LoginInput } from 'components/inputs/switch';

interface LoginState {
  email: string;
  username: string;
  password: string;
}

export const LoginView = () => {
  const [state, setState] = useState<LoginState>({
    email: '',
    password: '',
    username: '',
  });

  const [label, setLabel] = useState<string>('Email');

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
        <LoginInput
          onSwitch={setLabel}
          label={label}
          value={state.email}
          onChange={(value) =>
            label == 'Email'
              ? setState({ ...state, email: value })
              : setState({ ...state, username: value })
          }
        />
        <PasswordInput
          label="Password"
          value={state.password}
          onChange={(value) => setState({ ...state, password: value })}
        />
        <HGroup>
          <Spacer />
          <TextButton>Forget password...</TextButton>
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
