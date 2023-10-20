import React from 'react';

import { PATH } from 'consts';
import { Routes, Route } from 'react-router-dom';

import { Header, LoginPage, HomePage, RegisterPage } from 'pages';

export const NotAuthenticatedRoute: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.REGISTER} element={<RegisterPage />} />
      </Routes>
    </>
  );
};
