import React from 'react';
import { HeaderComponent } from '../header';
import { FooterComponent } from '../footer';

interface LayoutProps {
  isAuthenticated: boolean;
  setAuthentication: (e: boolean) => void;
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <HeaderComponent
        isAuthenticated={props.isAuthenticated}
        setAuthentication={props.setAuthentication}
      />
      {props.children}
      <FooterComponent />
    </>
  );
};
