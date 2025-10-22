import React, { useState } from "react";
import CounterUI from "./ui/CounterUI.jsx";

function DishCounter() {
  const [dishCount, setDishCount] = useState(0);
  function incrementDishCount() {
    if (dishCount !== 5) {
      setDishCount(dishCount + 1);
    }
  }

  function decrementDishCount() {
    if (dishCount !== 0) {
      setDishCount(dishCount - 1);
    }
  }
  return (
    <>
      <CounterUI
        count={dishCount}
        decrement={decrementDishCount}
        increment={incrementDishCount}
      />
    </>
  );
}

export default DishCounter;
