import React from "react";
import styles from "./styles/RestaurantsPage.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../redux/entities/restaurants/slice.jsx";
import { Link } from "react-router";
import { useRequest } from "../redux/hooks/use-request.jsx";
import { getRestaurantById } from "../redux/entities/restaurants/get-restaurants-by-id.jsx";

function RestaurantTab({ id }) {
  const restaurant = useSelector((state) => selectRestaurantsById(state, id));

  const requestStatus = useRequest(getRestaurantById, id);
  if (requestStatus === "pending") {
    return "loading...";
  }
  if (requestStatus === "rejected") {
    return "error";
  }
  const { name } = restaurant;
  return (
    <Link className={styles.list__item} to={`/restaurant/${id}`}>
      {name}
    </Link>
  );
}

export default RestaurantTab;
