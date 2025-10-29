import React from "react";

import CounterUI from "./ui/CounterUI.jsx";

function GradeCounter({ count, min, max, step, setCount }) {
  function incrementCount() {
    if (count !== max) {
      setCount(count + step);
    }
  }

  function decrementCount() {
    if (count !== min) {
      setCount(count - step);
    }
  }

  return (
    <CounterUI
      count={count}
      decrement={decrementCount}
      increment={incrementCount}
    />
  );
}

export default GradeCounter;
