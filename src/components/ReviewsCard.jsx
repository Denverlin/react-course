import React, { useContext } from "react";
import ReviewItem from "./ReviewItem.jsx";
import ReviewForm from "./ReviewForm.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../redux/entities/restaurants/slice.jsx";
import { AuthContext } from "./AuthContext.jsx";
import { useParams } from "react-router";

function ReviewsCard() {
  const params = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantsById(state, params.id),
  );
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <h3>Reviews</h3>
      {restaurant.reviews.length === 0 ? (
        <>
          <h2>No reviews</h2>
        </>
      ) : (
        <>
          <ul>
            {restaurant.reviews.map((item) => (
              <ReviewItem item={item} key={item} />
            ))}
          </ul>
        </>
      )}
      {isAuth && (
        <>
          <h3>Leave feedback</h3>
          <ReviewForm restaurantId={params.id} />
        </>
      )}
    </>
  );
}

export default ReviewsCard;
