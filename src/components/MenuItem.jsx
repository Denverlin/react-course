import React, { useContext } from "react";
import DishCounter from "./DishCounter.jsx";
import { AuthContext } from "./AuthContext.jsx";
import { useSelector } from "react-redux";
import { selectDishesById } from "../redux/entities/dishes/slice.jsx";
import { Link } from "react-router";

function MenuItem({ item }) {
  const { isAuth } = useContext(AuthContext);
  const dish = useSelector((state) => selectDishesById(state, item));
  return (
    <li key={dish.id}>
      <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
      {isAuth && <DishCounter id={item} />}
    </li>
  );
}

export default MenuItem;
