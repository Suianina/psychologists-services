import { useState } from 'react';

export type User = {
  id: string;
  email: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // TODO: implement Firebase auth
    setUser({ id: '1', email });
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
}
