import React, { useContext } from "react";

import styles from "../styles/Button.module.css";
import { ThemeContext } from "../ThemeContext.jsx";

function Button({ text, onclick }) {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={theme === "light" ? styles.button : styles.buttonDark}
      onClick={onclick}
    >
      {text}
    </button>
  );
}

export default Button;
