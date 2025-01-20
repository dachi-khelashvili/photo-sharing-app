import { Avatar, PasswordInput, TextInput, DateInput } from 'components';
import { Container, Frame, Group, LoginButton } from '../login/styles';
import { HGroup, VGroup } from './styles';
import React, { useReducer } from 'react';

import {
  InitialStateType,
  profileReducer,
  ProfileReducerActionTypes,
} from './reducer';

const InitialState: InitialStateType = {
  username: '',
  password: '',
  confirmPassword: '',
  address: '',
  birthday: '',
  gender: '',
  city: '',
  country: '',
  county: '',
};

export const ProfileView: React.FC = () => {
  const [state, dispatch] = useReducer(profileReducer, InitialState);

  const handleChange = (newValue: string, field: string) => {
    dispatch({
      type: field,
      payload: {
        [field]: newValue,
      },
    });
  };

  return (
    <>
      <Container>
        <Frame>
          <HGroup>
            <Avatar
              src="./snoopy-3.jpg"
              onClick={() => {
                console.log(1);
              }}
            />
            <VGroup>
              <TextInput
                label="Username"
                value={state.username}
                onChange={(e) =>
                  handleChange(e, ProfileReducerActionTypes.CHANGE_USERNAME)
                }
              />
              <PasswordInput
                value={state.password}
                label="Password"
                onChange={(e) =>
                  handleChange(e, ProfileReducerActionTypes.CHANGE_PASSWORD)
                }
              />
              <PasswordInput
                value={state.confirmPassword}
                label="Confirm Password"
                onChange={(e) =>
                  handleChange(
                    e,
                    ProfileReducerActionTypes.CHANGE_CONFIRM_PASSWORD
                  )
                }
              />
            </VGroup>
          </HGroup>
          <DateInput
            label="Birthday"
            value={state.birthday}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_BIRTHDAY)
            }
          />
          <TextInput
            label="Gender"
            value={state.gender}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_GENDER)
            }
          />
          <TextInput
            label="Address"
            value={state.address}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_ADDRESS)
            }
          />
          <TextInput
            label="City"
            value={state.city}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_CITY)
            }
          />
          <TextInput
            label="County"
            value={state.county}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_COUNTY)
            }
          />
          <TextInput
            label="Country"
            value={state.country}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_COUNTRY)
            }
          />
          <Group>
            <VGroup></VGroup>
            <LoginButton
              onClick={() => {
                console.log(state);
              }}
            >
              Save
            </LoginButton>
          </Group>
        </Frame>
      </Container>
    </>
  );
};
