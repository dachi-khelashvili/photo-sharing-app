import React from 'react';
import { Container } from './styles';
import { COLORSTYLE } from 'consts';

interface RoundButtonProps {
  children: React.ReactNode;
  style: COLORSTYLE;
  onClick: () => void;
}

export const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  style,
  onClick,
}) => {
  return (
    <Container $style={style} onClick={onClick}>
      {children}
    </Container>
  );
};
