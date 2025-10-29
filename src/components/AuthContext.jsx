import { createContext, useState } from "react";

export const AuthContext = createContext({ isAuth: false });

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const name = "John Doe";
  const authenticate = () => {
    setIsAuth((isAuth) => (isAuth === false ? true : false));
  };
  return (
    <AuthContext value={{ isAuth, authenticate, name }}>{children}</AuthContext>
  );
};
