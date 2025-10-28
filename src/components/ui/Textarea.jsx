import React, { useContext } from "react";
import styles from "../styles/Textarea.module.css";
import { ThemeContext } from "../ThemeContext.jsx";
import classNames from "classnames";

function Textarea({ text, setText }) {
  const { theme } = useContext(ThemeContext);
  return (
    <textarea
      className={classNames({
        [styles.textArea]: theme === "light",
        [styles.textAreaDark]: theme === "dark",
      })}
      value={text}
      onChange={(e) => setText(e.target.value)}
    ></textarea>
  );
}

export default Textarea;
