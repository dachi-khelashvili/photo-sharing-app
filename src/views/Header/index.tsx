import React from 'react';

import { Appbar, Logo, GoToLink } from './styles';
import { Search } from 'views/Home/styles';
import { PATH } from 'consts';

export const HeaderView: React.FC = () => {
  return (
    <Appbar>
      <Logo src="./grey-logo.png" />
      <Search type="text" placeholder="Search image..." />
      <GoToLink to={PATH.LOGIN}>Log in</GoToLink>
    </Appbar>
  );
};
