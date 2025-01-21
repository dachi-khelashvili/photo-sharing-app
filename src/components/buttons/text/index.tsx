import React from 'react';
import { Container } from './styles';

interface TextButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const TextButton: React.FC<TextButtonProps> = (props) => {
  return <Container onClick={props.onClick}>{props.children}</Container>;
};
