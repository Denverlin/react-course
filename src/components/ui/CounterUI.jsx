import React from "react";
import Button from "./Button.jsx";
import styles from "../styles/CounterUI.module.css"
function CounterUi({ decrement, increment, count }) {
  return (
    <div className={styles.counter}>
      <Button onclick={decrement} text={"-"}></Button>
      <div className={"count"}>{count}</div>
      <Button onclick={increment} text={"+"}></Button>
    </div>
  );
}

export default CounterUi;
