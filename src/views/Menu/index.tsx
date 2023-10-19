import React from 'react';
import { Link } from 'react-router-dom';

import { Container, MenuItem } from './styles';

export const MenuView: React.FC = () => {
  return (
    <Container>
      <MenuItem>
        <Link
          to="/gallery"
          style={{ width: '100%', textDecoration: 'none', color: 'white' }}
        >
          <div style={{ margin: '10px' }}>Gallery</div>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          to="/discussion"
          style={{ width: '100%', textDecoration: 'none', color: 'white' }}
        >
          <div style={{ margin: '10px' }}>Discussion</div>
        </Link>
      </MenuItem>
    </Container>
  );
};
