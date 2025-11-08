import React, { useContext } from "react";
import { Link, useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectDishesById } from "../redux/entities/dishes/slice.jsx";
import DishCounter from "./DishCounter.jsx";
import { AuthContext } from "./AuthContext.jsx";
import style from "./styles/DishCard.module.css";

function DishCard() {
  let params = useParams();
  const { isAuth } = useContext(AuthContext);
  let dish = useSelector((state) => selectDishesById(state, params.dishId));

  return (
    <div className={style.dishInfo}>
      <div>{dish.name}</div>
      {isAuth && <DishCounter id={params.dishId} />}
      <Link to={"/restaurants"}>To Restaurants</Link>
    </div>
  );
}

export default DishCard;
