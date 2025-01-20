import React from 'react';
import { Container } from './styles';
import { BUTTONSTYLE } from 'consts';

interface RoundButtonProps {
  children: React.ReactNode;
  style: BUTTONSTYLE;
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
