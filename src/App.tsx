import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IsAuthenticatedRoute, NotAuthenticatedRoute } from 'routes';

const isAuthenticated = true;

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        {isAuthenticated ? <IsAuthenticatedRoute /> : <NotAuthenticatedRoute />}
      </BrowserRouter>
    </>
  );
};
