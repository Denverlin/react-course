import React from "react";
import "../styles/Textarea.css";

function Textarea({ text, setText }) {
  return (
    <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
  );
}

export default Textarea;
