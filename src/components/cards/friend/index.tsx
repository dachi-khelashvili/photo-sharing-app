import React from 'react';

import { Container, Grid, AlignRight, Description } from './styles';
import { Avatar, BasicButton } from 'components';

export type FriendCardProps = {
  type: string;
  friend: {
    path: string;
    name: string;
    gender: string;
    birthday: string;
    address: string;
  };
  onClick: () => void;
};

export const FriendCard: React.FC<FriendCardProps> = ({
  onClick,
  friend,
  type,
}) => {
  const onAvatarClick = () => {
    return null;
  };
  return (
    <Container>
      <Avatar
        avatarstyle="large"
        src={friend.path}
        onClick={onAvatarClick}
      ></Avatar>
      <Grid>
        <AlignRight>
          <BasicButton buttonstyle="transparent" onClick={onClick}>
            {type}
          </BasicButton>
        </AlignRight>
        <Description>
          <div>Name:</div>
          <div>{friend.name}</div>
          <div>Gender:</div>
          <div>{friend.gender}</div>
          <div>Birthday:</div>
          <div>{friend.birthday}</div>
          <div>Address:</div>
          <div>{friend.address}</div>
        </Description>
      </Grid>
    </Container>
  );
};
