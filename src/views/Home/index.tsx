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
  Block,
  BlockReverse,
  ContextEnd,
  ContextStart,
  ImageContainer,
} from './styles';

import { SearchBar } from 'components';

export const HomeView: React.FC = () => {
  return (
    <>
      <Image src="./Photos.png" alt="back" />
      <Container>
        <Header>Photo Share</Header>
        <Caption>Create and share your images</Caption>
        <SearchBar type="text" placeholder="Search image..." />
        <Description>Trending: flower, wallpapaer, beauty, love...</Description>
      </Container>
      <BlockReverse>
        <ImageContainer src="community.png" />
        <ContextEnd>
          <Caption>Welcome to our Community</Caption>
          <Description>
            Share everything with your community and find your value sharing
            with others
          </Description>
        </ContextEnd>
      </BlockReverse>
      <Block>
        <ImageContainer src="chatting.png" />
        <ContextStart>
          <Caption>Welcome to our Chatting</Caption>
          <Description>
            Share everything with your community and find your value sharing
            with others
          </Description>
        </ContextStart>
      </Block>
      <BlockReverse>
        <ImageContainer src="friends.png" />
        <ContextEnd>
          <Caption>Find and make your own friends</Caption>
          <Description>
            Make a friendship with photos and feel happy and sad with your
            friends
          </Description>
        </ContextEnd>
      </BlockReverse>
      <FootContainer>
        <Footer>
          <Notification>PhotoShare 2023</Notification>
          <Caption>Thanks for visiting PhotoShare</Caption>
        </Footer>
      </FootContainer>
    </>
  );
};
