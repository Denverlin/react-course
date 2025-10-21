import React, { useContext } from "react";
import styles from "../styles/Header.module.css";
import Button from "../ui/Button.jsx";
import { ThemeContext } from "../ThemeContext.jsx";
import classNames from "classnames";
import { AuthContext } from "../AuthContext.jsx";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuth, authentication, name } = useContext(AuthContext);
  return (
    <div
      className={classNames({
        [styles.header]: theme === "light",
        [styles.headerDark]: theme === "dark",
      })}
    >
      <div className={styles.logo}></div>
      <div className={styles.logIn}>
        <div className={styles.logIn__name}>
          {isAuth && `Welcome, ${name}!`}
        </div>
        <div className={styles.logIn__button}>
          <Button
            onclick={authentication}
            text={isAuth ? "Log Out" : "Log In"}
          />
        </div>
      </div>
      <div className={styles.themeButton}>
        <Button onclick={toggleTheme} text={`Current theme : ${theme}`} />
      </div>
    </div>
  );
}

export default Header;
