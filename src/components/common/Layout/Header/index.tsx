import { PATH } from 'consts';
import React from 'react';
import { Header, WebsiteTitle } from './styles';

export const HeaderSection: React.FC = () => {
  return (
    <Header>
      <WebsiteTitle to={PATH.DASHBOARD}>
        React + Typescript Frontend Template
      </WebsiteTitle>
    </Header>
  );
};
