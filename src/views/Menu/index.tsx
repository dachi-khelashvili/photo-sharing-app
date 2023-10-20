import React from 'react';

import { Container, MenuItem } from './styles';
import { StyledLinkComponent } from 'components';

export const MenuView: React.FC = () => {
  return (
    <Container>
      <MenuItem>
        <StyledLinkComponent path="/gallery">Gallery</StyledLinkComponent>
      </MenuItem>
      <MenuItem>
        <StyledLinkComponent path="/chatroom">Discussion</StyledLinkComponent>
      </MenuItem>
    </Container>
  );
};
