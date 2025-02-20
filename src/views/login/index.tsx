import { COLORSTYLE, PATH } from 'consts';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Frame, Center, HGroup, Image, Spacer } from 'components';
import { RoundButton, PasswordInput, TextButton } from 'components';
import LogoIcon from 'assets/images/logo.svg';
import { LoginInput } from 'components/inputs/switch';
import { useQuery } from '@tanstack/react-query';
import { User } from 'consts/models';
import { useUserData } from 'contexts/user';

interface LoginState {
  email: string;
  username: string;
  password: string;
}

const fetchLoginData = async (email: string, password: string) => {
  const response = await fetch(
    'https://photo-sharing-api.vercel.app/api/v1/users/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};

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

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['login'],
    queryFn: () => fetchLoginData(state.email, state.password),
    enabled: false,
  });

  const { login } = useUserData();

  useEffect(() => {
    if (data) {
      const user = data as User;
      if (user.id && login) {
        login(user);
        goTo(PATH.HOME);
      }
    }
  }, [data, login, navigate]);

  const onClickLogInHandler = async () => {
    try {
      await refetch();
    } catch (err) {
      console.error('Login error:', err);
    }
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
            label === 'Email'
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
            disabled={isLoading}
            onClick={onClickLogInHandler}
            style={COLORSTYLE.DOGWOOD_ROSE}
          >
            Log in
          </RoundButton>
          <RoundButton
            disabled={isLoading}
            onClick={onClickRegisterHandler}
            style={COLORSTYLE.DARK_MAGENTA}
          >
            Register
          </RoundButton>
        </HGroup>
        {isError && <div style={{ color: 'red' }}>Error: {error.message}</div>}
      </Frame>
    </Container>
  );
};
