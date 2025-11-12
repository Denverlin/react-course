import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../redux/entities/restaurants/slice.jsx";
import { useParams } from "react-router";
import MenuItem from "./MenuItem.jsx";

function MenuCard() {
  const params = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantsById(state, params.id),
  );

  return (
    <div>
      <div>
        <h3>Menu</h3>

        {restaurant.menu.length === 0 ? (
          <div>
            <h2>The restaurant is closed</h2>
          </div>
        ) : (
          <ul>
            {restaurant.menu.map((item) => (
              <MenuItem key={item} item={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MenuCard;
