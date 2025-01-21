import React from 'react';
import { Container } from './styles';

interface IconButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
}) => {
  return <Container onClick={onClick}>{children}</Container>;
};
