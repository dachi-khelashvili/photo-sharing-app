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
import { SelectInput } from 'components/inputs/select';
import { COLORSTYLE, PATH, SIZESTYLE } from 'consts';
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
  firstname: string;
  lastname: string;
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
    firstname: '',
    lastname: '',
  });

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Frame>
          <HGroup>
            <Avatar
              src="https://fastly.picsum.photos/id/111/600/600.jpg?hmac=lcOMUfnTHx39V8ZXAD0efwM33vmYs4I70hQGDILdRqI"
              style={SIZESTYLE.BIG}
              onClick={() => {
                console.log(1);
              }}
            />
            <VGroup>
              <TextInput
                label="First Name"
                value={state.firstname}
                onChange={(value) => setState({ ...state, firstname: value })}
              />
              <TextInput
                label="Last Name"
                value={state.lastname}
                onChange={(value) => setState({ ...state, lastname: value })}
              />
            </VGroup>
          </HGroup>
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
          <SelectInput
            label="Gender"
            value={state.gender}
            items={['male', 'female']}
            onChange={(value) => setState({ ...state, gender: value })}
          />
          <HGroup>
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
          </HGroup>
          <HGroup>
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
          </HGroup>
          <RoundButton
            style={COLORSTYLE.DOGWOOD_ROSE}
            onClick={() => navigate(PATH.COMMUNITY)}
          >
            Save
          </RoundButton>
        </Frame>
      </Container>
    </>
  );
};
