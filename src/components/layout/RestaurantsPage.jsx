import React, { useContext, useState } from "react";

import styles from "../styles/RestaurantsPage.module.css";
import InfoCard from "../InfoCard.jsx";
import classNames from "classnames";
import { ThemeContext } from "../ThemeContext.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice.jsx";
import RestaurantTab from "../RestaurantTab.jsx";

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
          <InfoCard key={selectedRestaurantId} id={selectedRestaurantId} />
        </div>
      )}
    </>
  );
}

export default RestaurantsPage;
