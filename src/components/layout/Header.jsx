import React, { useContext } from "react";
import styles from "../styles/Header.module.css";
import Button from "../ui/Button.jsx";
import { ThemeContext } from "../ThemeContext.jsx";
import classNames from "classnames";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={classNames({
        [styles.header]: theme === "light",
        [styles.headerDark]: theme === "dark",
      })}
    >
      <div className={styles.logo}></div>
      <div className={styles.logIn}>
        <Button text={"Log In"} />
      </div>
      <div className={styles.themeButton}>
        <Button onclick={toggleTheme} text={theme} />
      </div>
    </div>
  );
}

export default Header;
