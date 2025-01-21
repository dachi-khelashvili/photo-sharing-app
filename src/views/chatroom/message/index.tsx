import React from 'react';
import { Container, Text, Group } from './styles';

import { Label } from '../user/styles';
import { Avatar } from 'components';
import { SIZESTYLE } from 'consts';

interface MessageItemProps {
  name: string;
  avatar: string;
  text: string;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  name: from,
  avatar,
  text,
}) => {
  return (
    <Container>
      <Avatar src={avatar} style={SIZESTYLE.MIDDLE} />
      <Group>
        <Label>{from}</Label>
        <Text>{text}</Text>
      </Group>
    </Container>
  );
};
