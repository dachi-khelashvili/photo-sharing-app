import React from 'react';
import { Container, Label } from './styles';
import { Avatar } from 'components';

interface UserIemProps {
  name: string;
  avatar: string;
  disabled: boolean;
  onClick: (e: [string, string, string, string]) => void;
}

export const UserItem: React.FC<UserIemProps> = (props) => {
  return (
    <Container
      disabled={props.disabled}
      onClick={() => {
        props.onClick(['User', props.name, props.name, props.avatar]);
      }}
    >
      <Avatar src={props.avatar} />
      <Label>{props.name}</Label>
    </Container>
  );
};
