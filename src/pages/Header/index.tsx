import { HeaderView, AuthenticatedHeaderView } from 'views';
import React from 'react';

export const Header: React.FC = () => {
  return <HeaderView />;
};

export const AuthenticatedHeader: React.FC = () => {
  return <AuthenticatedHeaderView />;
};
