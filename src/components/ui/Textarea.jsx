import React from "react";
import styles from "../styles/Textarea.module.css"

function Textarea({ text, setText }) {
  return (
    <textarea className={styles.textArea} value={text} onChange={(e) => setText(e.target.value)}></textarea>
  );
}

export default Textarea;
