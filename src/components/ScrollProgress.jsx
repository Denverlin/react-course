import React, { useEffect, useState } from "react";
import "./styles/ScrollProgress.css";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  function progressBar() {
    let scroll = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollProgress((scroll / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", progressBar);
    document.querySelector(".progress-bar").style.minWidth =
      `${scrollProgress}%`;

    return () => {
      window.removeEventListener("scroll", progressBar);
    };
  }, [scrollProgress]);

  return <div className={"progress-bar"}></div>;
}

export default ScrollProgress;
