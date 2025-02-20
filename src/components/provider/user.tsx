import type React from 'react';
import { useState } from 'react';
import { UserContext } from 'contexts/user';
import { User } from 'consts/models';

export function ContexProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, Authenticate] = useState<boolean>(true);

  const login = (user: User) => {
    setUser(user);
    Authenticate(true);
  };

  return (
    <UserContext.Provider value={{ isAuthenticated, user, login }}>
      {children}
    </UserContext.Provider>
  );
}
