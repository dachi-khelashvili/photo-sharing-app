import { LayoutComponent } from 'components';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouteComponent } from 'routes';
import { ContexProvider } from 'components/provider/user';

export const App: React.FC = () => {
  return (
    <ContexProvider>
      <BrowserRouter>
        <LayoutComponent>
          <RouteComponent />
        </LayoutComponent>
      </BrowserRouter>
    </ContexProvider>
  );
};
