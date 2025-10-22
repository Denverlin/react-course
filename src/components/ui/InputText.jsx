import React from "react";
import styles from "../styles/InputText.module.css"

function InputText({ text, setText }) {
  return (
    <input className={styles.inputText}
      value={text}
      onChange={(e) => setText(e.target.value)}
      type={"text"}
    />
  );
}

export default InputText;
