import React, { useContext } from "react";
import styles from "../styles/InputText.module.css";
import { ThemeContext } from "../ThemeContext.jsx";
import classNames from "classnames";

function InputText({ text, setText }) {
  const { theme } = useContext(ThemeContext);
  return (
    <input
      className={classNames({
        [styles.inputTextDark]: theme === "dark",
        [styles.inputText]: theme === "light",
      })}
      value={text}
      onChange={(e) => setText(e.target.value)}
      type={"text"}
    />
  );
}

export default InputText;
