import React, { useCallback } from "react";
import CounterUI from "./ui/CounterUI.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from "../redux/entities/cart/slice.jsx";

function DishCounter({ id }) {
  const dispatch = useDispatch();
  const dishCount =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;

  const incrementDishCount = useCallback(
    () => dispatch(addToCart(id)),
    [dispatch, id],
  );

  const decrementDishCount = useCallback(
    () => dispatch(removeFromCart(id)),
    [dispatch, id],
  );
  return (
    <CounterUI
      count={dishCount}
      decrement={decrementDishCount}
      increment={incrementDishCount}
    />
  );
}

export default DishCounter;
