import ReviewForm from "./ReviewForm.jsx";
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "./redux/entities/restaurants/slice.jsx";
import MenuItem from "./MenuItem.jsx";
import ReviewItem from "./ReviewItem.jsx";

function InfoCard({ id }) {
  const { isAuth } = useContext(AuthContext);
  const restaurant = useSelector((state) => selectRestaurantsById(state, id));

  return (
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

      <h3>Reviews</h3>

      {restaurant.reviews.length === 0 ? (
        <div>
          <h2>No reviews</h2>
        </div>
      ) : (
        <ul>
          {restaurant.reviews.map((item) => (
            <ReviewItem item={item} key={item} />
          ))}
        </ul>
      )}
      {isAuth && (
        <>
          <h3>Leave feedback</h3>
          <ReviewForm restaurantId={id} />
        </>
      )}
    </div>
  );
}

export default InfoCard;
