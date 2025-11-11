import React, { useContext, useState } from "react";

import styles from "../components/styles/RestaurantsPage.module.css";
import classNames from "classnames";
import { ThemeContext } from "../components/ThemeContext.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice.jsx";
import RestaurantTab from "../components/RestaurantTab.jsx";

function RestaurantsPage() {
  const { theme } = useContext(ThemeContext);
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurantsIds[0],
  );

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
