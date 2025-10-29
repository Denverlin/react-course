import React from "react";
import Button from "./ui/Button.jsx";
import styles from "./styles/RestaurantsPage.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "./redux/entities/restaurants/slice.jsx";

function RestaurantTab({ id, onclick }) {
  const restaurant = useSelector((state) => selectRestaurantsById(state, id));
  const { name } = restaurant;
  return <Button className={styles.list__item} onclick={onclick} text={name} />;
}

export default RestaurantTab;
