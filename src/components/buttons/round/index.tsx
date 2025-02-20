import React from 'react';
import { Container } from './styles';
import { COLORSTYLE } from 'consts';

interface RoundButtonProps {
  children: React.ReactNode;
  style: COLORSTYLE;
  disabled?: boolean;
  onClick?: () => void;
}

export const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  style,
  disabled,
  onClick,
}) => {
  return (
    <Container $style={style} onClick={onClick} disabled={disabled}>
      {children}
    </Container>
  );
};
