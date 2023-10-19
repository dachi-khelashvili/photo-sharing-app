import React from 'react';

import { Image } from 'components';

import {
  Container,
  Header,
  Caption,
  Footer,
  FootContainer,
  Notification,
  Description,
} from './styles';

import { SearchBar } from 'components';

export const HomeView: React.FC = () => {
  return (
    <>
      <Image src="./mountain.jpg" alt="back" />
      <Container>
        <Header>PhotoShare </Header>
        <Caption>Create and share your images</Caption>
        <SearchBar type="text" placeholder="Search image..." />
        <Description>Trending: flower, wallpapaer, beauty, love...</Description>
      </Container>
      <FootContainer>
        <Footer>
          <Notification>PhotoShare 2023</Notification>
          <Caption>Thanks for visiting PhotoShare</Caption>
        </Footer>
      </FootContainer>
    </>
  );
};
