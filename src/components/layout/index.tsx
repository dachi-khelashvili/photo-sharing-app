import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Container } from './styles';

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
};
