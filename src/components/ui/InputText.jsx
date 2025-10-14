import React from "react";
import "../styles/InputText.css";

function InputText({ text, setText }) {
  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      type={"text"}
    />
  );
}

export default InputText;
