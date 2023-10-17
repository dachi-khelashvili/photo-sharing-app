import React from 'react';
import { StyledButton, StyledButtonType } from './styles';

interface StyledButtonComponentProps {
  children: React.ReactNode;
  buttonStyle: StyledButtonType;
  onClick: () => void;
}

export const StyledButtonComponent: React.FC<StyledButtonComponentProps> = ({
  children,
  buttonStyle,
  onClick,
}) => {
  return (
    <StyledButton buttonStyle={buttonStyle} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
