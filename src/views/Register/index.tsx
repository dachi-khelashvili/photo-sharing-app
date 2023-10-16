import { PATH } from 'consts';
import React from 'react';
import {
  Container,
  Frame,
  Input,
  Comment,
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
        <Comment fsize="40px">Sign Up</Comment>
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
