import React from 'react';
import { SmallContainer, Image, BigContainer } from './styles';
import { SIZESTYLE } from 'consts';

interface AvatarProps {
  src: string;
  onClick: () => void;
  style?: SIZESTYLE;
}

export const Avatar: React.FC<AvatarProps> = ({ src, onClick, style }) => {
  const Container = style === SIZESTYLE.BIG ? BigContainer : SmallContainer;

  return (
    <Container onClick={onClick}>
      <Image src={src} />
    </Container>
  );
};
