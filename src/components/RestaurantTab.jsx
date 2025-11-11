import React from "react";
import styles from "./styles/RestaurantsPage.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../redux/entities/restaurants/slice.jsx";
import { Link } from "react-router";

function RestaurantTab({ id }) {
  const restaurant = useSelector((state) => selectRestaurantsById(state, id));
  const { name } = restaurant;
  return (
    <Link className={styles.list__item} to={`/restaurant/${id}`}>
      {name}
    </Link>
  );
}

export default RestaurantTab;
