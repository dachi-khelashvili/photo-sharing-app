import React from 'react';
import { Container } from './styles';

interface LinkButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return <Container onClick={props.onClick}>{props.children}</Container>;
};
