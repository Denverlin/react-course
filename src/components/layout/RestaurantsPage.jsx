import React, { useContext, useState } from "react";
import { restaurants } from "../data/mock.js";
import styles from "../styles/RestaurantsPage.module.css";
import InfoCard from "../InfoCard.jsx";
import Button from "../ui/Button.jsx";
import classNames from "classnames";
import { ThemeContext } from "../ThemeContext.jsx";

function RestaurantsPage() {
  const { theme } = useContext(ThemeContext);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurants[0].id,
  );
  const selectedRestaurant = restaurants.find(
    ({ id }) => id === selectedRestaurantId,
  );

  function selectRestaurant(id) {
    if (selectedRestaurantId !== id) {
      setSelectedRestaurantId(id);
    }
  }

  return (
    <>
      {restaurants.length === 0 ? (
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
            {restaurants.map((restaurant) => (
              <Button
                className={styles.list__item}
                onclick={() => selectRestaurant(restaurant.id)}
                key={restaurant.id}
                text={restaurant.name}
              />
            ))}
          </div>
          <InfoCard restaurant={selectedRestaurant}></InfoCard>
        </div>
      )}
    </>
  );
}

export default RestaurantsPage;
