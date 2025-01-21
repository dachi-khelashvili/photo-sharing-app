import React from 'react';
import { UpButton, Search } from 'components';
import {
  Container,
  Block,
  BlockReverse,
  ContextEnd,
  ContextStart,
  Image,
  SearchSection,
  SearchContainer,
  BlockSection,
} from './styles';
import ChattingImage from 'assets/images/chatting.png';
import CommunityImage from 'assets/images/community.png';
import FriendsImage from 'assets/images/friends.png';

// Define types for feature blocks
interface FeatureBlockProps {
  imageSrc: string;
  title: string;
  description: string;
  isReverse?: boolean;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  imageSrc,
  title,
  description,
  isReverse = false,
}) => {
  const BlockWrapper = isReverse ? BlockReverse : Block;
  const Context = isReverse ? ContextEnd : ContextStart;

  return (
    <BlockWrapper>
      <Image src={imageSrc} alt={title} />
      <Context>
        <h3>{title}</h3>
        <p>{description}</p>
      </Context>
    </BlockWrapper>
  );
};

export const HomeView: React.FC = () => {
  return (
    <Container>
      <UpButton />
      <SearchSection>
        <SearchContainer>
          <Search label="Search image..." />
        </SearchContainer>
      </SearchSection>

      <BlockSection>
        <FeatureBlock
          imageSrc={CommunityImage}
          title="Welcome to our Community"
          description="Share everything with your community and find your value sharing with others"
          isReverse
        />
        <FeatureBlock
          imageSrc={ChattingImage}
          title="Welcome to our Chatting"
          description="Share everything with your community and find your value sharing with others"
        />
        <FeatureBlock
          imageSrc={FriendsImage}
          title="Find and make your own friends"
          description="Make a friendship with photos and feel happy and sad with your friends"
          isReverse
        />
      </BlockSection>
    </Container>
  );
};
