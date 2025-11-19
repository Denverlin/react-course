import React, { useContext } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ScrollProgress from "../ScrollProgress.jsx";
import classNames from "classnames";
import styles from "../styles/App.module.css";
import { ThemeContext } from "../ThemeContext.jsx";
import { Outlet } from "react-router";

function Layout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames(styles.layout, {
        [styles.lightTheme]: theme === "light",
        [styles.darkTheme]: theme === "dark",
      })}
    >
      <ScrollProgress />
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
