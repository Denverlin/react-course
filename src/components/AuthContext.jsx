import { createContext, useState } from "react";

export const AuthContext = createContext({ isAuth: false });

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState("John Doe");
  const authentication = () => {
    setIsAuth((isAuth) => (isAuth === false ? true : false));
  };
  return (
    <AuthContext value={{ isAuth, authentication, name }}>
      {children}
    </AuthContext>
  );
};
