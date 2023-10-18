import React from 'react';
import { Container, TabItem } from './styles';
import { StyledButtonComponent } from 'components';

export const Tab: React.FC = () => {
  const onClick = () => {
    console.log('ButtonStyle');
  };

  return (
    <Container>
      <TabItem>Explore</TabItem>
      <TabItem>My Photos</TabItem>
      <TabItem>Friends</TabItem>
      <div style={{ marginLeft: 'auto' }}>
        <StyledButtonComponent buttonStyle="transparent" onClick={onClick}>
          Upload
        </StyledButtonComponent>
      </div>
    </Container>
  );
};
