import { createContext, useState } from "react";

export const ThemeContext = createContext({ theme: "dark" });

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
