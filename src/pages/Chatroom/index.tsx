import React from 'react';

import { MenuView, ChatRoomView } from 'views';
import { Container } from './styles';

export const ChatRoomPage: React.FC = () => {
  return (
    <Container>
      <MenuView />
      <ChatRoomView />
    </Container>
  );
};
