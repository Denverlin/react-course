import React, { useEffect, useState } from "react";
import "./styles/ScrollProgress.css";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function progressBar() {
      let scroll = document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((scroll / height) * 100);
    }
    window.addEventListener("scroll", progressBar);

    return () => {
      window.removeEventListener("scroll", progressBar);
    };
  }, [scrollProgress]);

  return (
    <div
      style={{ width: `${scrollProgress}%` }}
      className={"progress-bar"}
    ></div>
  );
}

export default ScrollProgress;
