import React from "react";
import Button from "./Button.jsx";
import "../styles/CounterUI.css";
function CounterUi({ decrement, increment, count }) {
  return (
    <div className={"counter"}>
      <Button onclick={decrement} text={"-"}></Button>
      <div className={"count"}>{count}</div>
      <Button onclick={increment} text={"+"}></Button>
    </div>
  );
}

export default CounterUi;
