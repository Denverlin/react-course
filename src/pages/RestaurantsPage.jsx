import React, { useContext, useEffect, useState } from "react";

import styles from "../components/styles/RestaurantsPage.module.css";
import classNames from "classnames";
import { ThemeContext } from "../components/ThemeContext.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRequestStatus,
  selectRestaurantsIds,
} from "../redux/entities/restaurants/slice.jsx";
import RestaurantTab from "../components/RestaurantTab.jsx";
import { getRestaurants } from "../redux/entities/restaurants/get-restaurants.jsx";
import { getDishes } from "../redux/entities/dishes/get-dishes.jsx";
import { getReviews } from "../redux/entities/reviews/get-reviews.jsx";

function RestaurantsPage() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const requestStatus = useSelector(selectRequestStatus);
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurantsIds[0],
  );

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getDishes());
    dispatch(getReviews());
  }, [dispatch]);

  if (requestStatus === "pending") {
    return "loading...";
  }

  if (requestStatus === "rejected") {
    return "some error";
  }

  function selectRestaurant(id) {
    if (selectedRestaurantId !== id) {
      setSelectedRestaurantId(id);
    }
  }

  return (
    <>
      {restaurantsIds.length === 0 ? (
        <div
          className={classNames({
            [styles.main]: theme === "light",
            [styles.mainDark]: theme === "dark",
          })}
        >
          <h2>All restaurants are closed</h2>
        </div>
      ) : (
        <div
          className={classNames({
            [styles.main]: theme === "light",
            [styles.mainDark]: theme === "dark",
          })}
        >
          <div className={styles.list}>
            {restaurantsIds.map((id) => (
              <RestaurantTab
                key={id}
                id={id}
                onclick={() => selectRestaurant(id)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default RestaurantsPage;
