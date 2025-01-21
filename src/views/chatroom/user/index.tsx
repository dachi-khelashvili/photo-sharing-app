import React from 'react';
import { Container, Label } from './styles';
import { Avatar } from 'components';

interface UserIemProps {
  name: string;
  avatar: string;
  disabled: boolean;
  onClick: (value: string) => void;
}

export const UserItem: React.FC<UserIemProps> = ({
  name,
  avatar,
  disabled,
  onClick,
}) => {
  return (
    <Container
      disabled={disabled}
      onClick={() => {
        onClick(name);
      }}
    >
      <Avatar src={avatar} />
      <Label>{name}</Label>
    </Container>
  );
};
