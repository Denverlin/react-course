import React, { useContext } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ScrollProgress from "../ScrollProgress.jsx";
import classNames from "classnames";
import styles from "../styles/App.module.css";
import { ThemeContext } from "../ThemeContext.jsx";

function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames({
        [styles.container]: theme === "light",
        [styles.containerDark]: theme === "dark",
      })}
    >
      <ScrollProgress />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
