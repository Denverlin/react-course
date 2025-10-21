import React, { useContext } from "react";
import Button from "./Button.jsx";
import styles from "../styles/CounterUI.module.css";

import classNames from "classnames";
import { ThemeContext } from "../ThemeContext.jsx";

function CounterUi({ decrement, increment, count }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames({
        [styles.counterDark]: theme === "dark",
        [styles.counter]: theme === "light",
      })}
    >
      <Button onclick={decrement} text={"-"}></Button>
      <div className={"count"}>{count}</div>
      <Button onclick={increment} text={"+"}></Button>
    </div>
  );
}

export default CounterUi;
