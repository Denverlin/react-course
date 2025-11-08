import React from "react";
import Button from "./ui/Button.jsx";
import styles from "./styles/RestaurantsPage.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../redux/entities/restaurants/slice.jsx";
import { Link } from "react-router";

function RestaurantTab({ id }) {
  const restaurant = useSelector((state) => selectRestaurantsById(state, id));
  const { name } = restaurant;
  return (
    <Link to={`/restaurant/${id}/menu`}>
      <Button className={styles.list__item} text={name} />
    </Link>
  );
}

export default RestaurantTab;
