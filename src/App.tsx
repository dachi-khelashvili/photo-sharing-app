import { LayoutComponent } from 'components/Layout';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IsAuthenticatedRoute, NotAuthenticatedRoute } from 'routes';

const isAuthenticated = true;

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <LayoutComponent>
          {isAuthenticated ? (
            <IsAuthenticatedRoute />
          ) : (
            <NotAuthenticatedRoute />
          )}
        </LayoutComponent>
      </BrowserRouter>
    </>
  );
};
