import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Container } from './styles';

interface LayoutProps {
  isAuthenticated: boolean;
  setAuthentication: (e: boolean) => void;
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header
        isAuthenticated={props.isAuthenticated}
        setAuthentication={props.setAuthentication}
      />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
};
