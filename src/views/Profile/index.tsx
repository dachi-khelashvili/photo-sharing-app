import { StyledAvatar, PasswordInput, BasicInput } from 'components';
import { Container, Frame, Group, LoginButton } from '../Login/styles';
import { HGroup, VGroup } from './styles';
import React, { useState } from 'react';

export const ProfileView: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  const [country, setCountry] = useState('');

  return (
    <>
      <Container>
        <Frame>
          <HGroup>
            <StyledAvatar
              src="./snoopy-3.jpg"
              avatarstyle="large"
              onClick={() => {
                console.log(1);
              }}
            />
            <VGroup>
              <BasicInput
                label="Username"
                value={username}
                onChange={setUsername}
              />
              <PasswordInput
                value={password}
                label="Password"
                isValidatable={true}
                onChange={setPassword}
              />
              <PasswordInput
                value={password}
                label="Confirm Password"
                isValidatable={false}
                onChange={setConfirm}
              />
            </VGroup>
          </HGroup>
          <BasicInput
            label="Birthday"
            value={birthday}
            onChange={setBirthday}
          />
          <BasicInput label="Gender" value={gender} onChange={setGender} />
          <BasicInput label="Address" value={address} onChange={setAddress} />
          <BasicInput label="City" value={city} onChange={setCity} />
          <BasicInput label="County" value={county} onChange={setCounty} />
          <BasicInput label="Country" value={country} onChange={setCountry} />
          <Group>
            <VGroup></VGroup>
            <LoginButton
              onClick={() => {
                if (password == confirm) console.log(username);
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
