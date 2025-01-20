import React from 'react';
import { Container, Image } from './styles';

interface AvatarProps {
  src: string;
  onClick: () => void;
}

export const Avatar: React.FC<AvatarProps> = ({ src, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Image src={src} />
    </Container>
  );
};
