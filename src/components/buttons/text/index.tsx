import React from 'react';
import { Container, LightContainer } from './styles';
import { COLORSTYLE } from 'consts';

interface TextButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  style?: COLORSTYLE;
}

export const TextButton: React.FC<TextButtonProps> = (props) => {
  return props.style === COLORSTYLE.LIGHT ? (
    <LightContainer onClick={props.onClick}>{props.children}</LightContainer>
  ) : (
    <Container onClick={props.onClick}>{props.children}</Container>
  );
};
