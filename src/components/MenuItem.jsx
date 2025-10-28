import React, { useContext } from "react";
import DishCounter from "./DishCounter.jsx";
import { AuthContext } from "./AuthContext.jsx";
import { useSelector } from "react-redux";
import { selectDishesById } from "./redux/entities/dishes/slice.jsx";

function MenuItem({ item }) {
  const { isAuth } = useContext(AuthContext);
  const dish = useSelector((state) => selectDishesById(state, item));
  return (
    <li key={dish.id}>
      {dish.name}
      {isAuth && <DishCounter id={item} />}
    </li>
  );
}

export default MenuItem;
