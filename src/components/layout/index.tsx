import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Container } from './styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Container>{props.children}</Container>
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};
