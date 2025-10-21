import React, { useContext, useEffect, useState } from "react";
import styles from "./styles/ScrollProgress.module.css";
import classNames from "classnames";
import { ThemeContext } from "./ThemeContext.jsx";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useContext(ThemeContext);
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
      className={classNames({
        [styles.progressBar]: theme === "light",
        [styles.progressBarDark]: theme === "dark",
      })}
    ></div>
  );
}

export default ScrollProgress;
