import React from 'react';

import { Container, Grid, AlignRight, Description } from './styles';
import { Avatar, StyledButton } from 'components';

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
      <Avatar src={friend.path} onClick={onAvatarClick}></Avatar>
      <Grid>
        <AlignRight>
          <StyledButton style="transparent" onClick={onClick}>
            {type}
          </StyledButton>
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
