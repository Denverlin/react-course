import React from "react";
import MenuItem from "./MenuItem.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../redux/entities/restaurants/slice.jsx";
import { Link, useParams } from "react-router";
import MenuReviewsNav from "./MenuReviewsNav.jsx";

function MenuCard() {
  const params = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantsById(state, params.id),
  );
  return (
    <div>
      <MenuReviewsNav />
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
      <Link to={"/restaurants"}>To Restaurants</Link>
    </div>
  );
}

export default MenuCard;
