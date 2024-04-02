import { useRouter } from 'next/router';
import React from 'react';

export const AUTH_KEY = 'auth_key';

export type TokenModel = { token: string };

export function getToken() {
  if (typeof window === 'undefined') return;
  const result = window.localStorage.getItem(AUTH_KEY);
  return result ? (JSON.parse(result) as TokenModel) : undefined;
}

export function setToken(value: TokenModel | undefined) {
  if (typeof window === 'undefined') return;
  if (value === undefined) {
    window.localStorage.removeItem(AUTH_KEY);
    return;
  }
  window.localStorage.setItem(AUTH_KEY, JSON.stringify(value));
}

export const AuthContext = React.createContext<{
  token: TokenModel | undefined;
  setToken: (token: TokenModel | undefined) => void;
  logout: () => void;
}>({
  token: undefined,
  setToken() {},
  logout() {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, _setToken] = React.useState<TokenModel | undefined>(undefined);
  const { replace } = useRouter();

  const logout = () => {
    _setToken(undefined);
    replace('/login');
  };

  const handleToken = (token: TokenModel | undefined) => {
    _setToken(token); // state
    setToken(token); // storage
  };

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const token = getToken();
    setToken(token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken: handleToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  const context = React.useContext(AuthContext);
  return context;
}
