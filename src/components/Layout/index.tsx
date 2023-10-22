import React from 'react';
import { HeaderComponent } from '../Header';
import { FooterComponent } from '../Footer';

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};
