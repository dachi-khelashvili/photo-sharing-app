import React from 'react';

import {
  Container,
  Header,
  Caption,
  Search,
  Description,
  Image,
  Notification,
} from './styles';

export const HomeView: React.FC = () => {
  return (
    <div>
      <Image src="./mountain.jpg" alt="back" />
      <Container>
        <Header>PhotoShare </Header>
        <Caption>Create and share your images</Caption>
        <Search type="text" placeholder="Search image..." />
        <Description>Trending: flower, wallpapaer, beauty, love...</Description>
      </Container>
      <div
        style={{
          position: 'absolute',
          top: '1050px',
          width: '100vw',
          alignItems: 'center',
        }}
      >
        <Container
          style={{
            alignItems: 'center',
            backgroundColor: '#555555',
            width: '70%',
            padding: '30px',
          }}
        >
          <Notification>PhotoShare 2023</Notification>
          <Caption>Thanks for visiting PhotoShare</Caption>
        </Container>
      </div>
    </div>
  );
};
