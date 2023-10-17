import { PATH } from 'consts';
import React from 'react';
import {
  Container,
  Frame,
  Input,
  Heading,
  Join,
  Group,
  Img,
  Side,
} from './styles';

export const RegisterView: React.FC = () => {
  return (
    <Container>
      <Side></Side>
      <Frame>
        <Img src="./logo.png" />
        <Heading>Sign Up</Heading>
        <Group>
          <Input placeholder="first Name" />
          <Input placeholder="second Name" />
        </Group>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Input placeholder="confirm Password" />
        <Join to={PATH.LOGIN}>Join</Join>
      </Frame>
    </Container>
  );
};
