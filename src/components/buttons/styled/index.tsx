import React from 'react';
import { Container } from './styles';

interface StyledButtonProps {
  children: React.ReactNode;
  style: string;
  onClick: () => void;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  style,
  onClick,
}) => {
  return (
    <Container style={style} onClick={onClick}>
      {children}
    </Container>
  );
};
