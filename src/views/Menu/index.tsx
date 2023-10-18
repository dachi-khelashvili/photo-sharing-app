import React from 'react';
import { Container, MenuItem } from './styles';

export const MenuView: React.FC = () => {
  return (
    <Container>
      <MenuItem>
        <div style={{ margin: '10px' }}>Gallery</div>
      </MenuItem>
      <MenuItem>
        <div style={{ margin: '10px' }}>Discussion</div>
      </MenuItem>
    </Container>
  );
};
