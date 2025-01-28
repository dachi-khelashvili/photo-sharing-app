import React from 'react';
import { User } from 'consts/models';

interface UserContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: ((user: User) => void) | null;
}

const initialUserContext = {
  isAuthenticated: false,
  user: null,
  login: null,
};

export const UserContext =
  React.createContext<UserContextType>(initialUserContext);

export const useUserData = () => {
  const context = React.useContext(UserContext);
  return context;
};
