import React from 'react';
import { GoToTopBtn, SearchBar } from 'components';
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

const TRENDING_TAGS = ['flower', 'wallpaper', 'beauty', 'love'];

export const HomeView: React.FC = () => {
  return (
    <Container>
      <GoToTopBtn />
      <SearchSection>
        <SearchContainer>
          <h1>PhotoShare</h1>
          <h3>Create and share your images</h3>
          <SearchBar
            type="text"
            placeholder="Search image..."
            aria-label="Search images"
          />
          <p>Trending: {TRENDING_TAGS.join(', ')}...</p>
        </SearchContainer>
      </SearchSection>

      <BlockSection>
        <FeatureBlock
          imageSrc="community.png"
          title="Welcome to our Community"
          description="Share everything with your community and find your value sharing with others"
          isReverse
        />
        <FeatureBlock
          imageSrc="chatting.png"
          title="Welcome to our Chatting"
          description="Share everything with your community and find your value sharing with others"
        />
        <FeatureBlock
          imageSrc="friends.png"
          title="Find and make your own friends"
          description="Make a friendship with photos and feel happy and sad with your friends"
          isReverse
        />
      </BlockSection>
    </Container>
  );
};
