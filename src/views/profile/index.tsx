import {
  Avatar,
  PasswordInput,
  TextInput,
  DateInput,
  RoundButton,
  Container,
  Frame,
  HGroup,
  VGroup,
  EmailInput,
} from 'components';
import { BUTTONSTYLE, PATH, SIZESTYLE } from 'consts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProfileState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthday: string;
  gender: string;
  address: string;
  city: string;
  county: string;
  country: string;
}

export const ProfileView: React.FC = () => {
  const [state, setState] = useState<ProfileState>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    gender: '',
    address: '',
    city: '',
    county: '',
    country: '',
  });

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Frame>
          <HGroup>
            <Avatar
              src="./snoopy-3.jpg"
              style={SIZESTYLE.BIG}
              onClick={() => {
                console.log(1);
              }}
            />
            <VGroup>
              <EmailInput
                label="Email"
                value={state.email}
                onChange={(value) => setState({ ...state, email: value })}
              />
              <TextInput
                label="Username"
                value={state.username}
                onChange={(value) => setState({ ...state, username: value })}
              />
            </VGroup>
          </HGroup>
          <PasswordInput
            value={state.password}
            label="Password"
            onChange={(value) => setState({ ...state, password: value })}
          />
          <PasswordInput
            value={state.confirmPassword}
            label="Confirm Password"
            onChange={(value) => setState({ ...state, confirmPassword: value })}
          />
          <DateInput
            label="Birthday"
            value={state.birthday}
            onChange={(value) => setState({ ...state, birthday: value })}
          />
          <TextInput
            label="Gender"
            value={state.gender}
            onChange={(value) => setState({ ...state, gender: value })}
          />
          <TextInput
            label="Address"
            value={state.address}
            onChange={(value) => setState({ ...state, address: value })}
          />
          <TextInput
            label="City"
            value={state.city}
            onChange={(value) => setState({ ...state, city: value })}
          />
          <TextInput
            label="County"
            value={state.county}
            onChange={(value) => setState({ ...state, county: value })}
          />
          <TextInput
            label="Country"
            value={state.country}
            onChange={(value) => setState({ ...state, country: value })}
          />
          <RoundButton
            style={BUTTONSTYLE.PINK}
            onClick={() => navigate(PATH.COMMUNITY)}
          >
            Save
          </RoundButton>
        </Frame>
      </Container>
    </>
  );
};
