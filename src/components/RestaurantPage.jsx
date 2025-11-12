import { Link, Outlet, useParams } from "react-router";
import MenuReviewsNav from "./MenuReviewsNav.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../redux/entities/restaurants/slice.jsx";
import React from "react";
import styles from "./styles/ReastaurantPage.module.css";

function RestaurantPage() {
  const params = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantsById(state, params.id),
  );

  return (
    <div>
      <div className={styles.restaurantName}>{restaurant.name}</div>
      <MenuReviewsNav id={params.id} />
      <Outlet />
      <Link className={styles.linkToRestaurants} to={"/restaurants"}>
        Back To Restaurants
      </Link>
    </div>
  );
}

export default RestaurantPage;
