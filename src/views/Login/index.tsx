import { PATH } from 'consts';
import React from 'react';
import {
  Container,
  ErrorTitle,
  NotExistText,
  NotFoundText,
  GoToHomePage,
} from './styles';

export const LoginView: React.FC = () => {
  return (
    <Container>
      <ErrorTitle>404</ErrorTitle>
      <NotExistText>This page does not exist</NotExistText>
      <NotFoundText>
        The page you are looking for could not be found.
      </NotFoundText>
      <GoToHomePage to={PATH.HOME}>Go to HomePage!</GoToHomePage>
    </Container>
  );
};
