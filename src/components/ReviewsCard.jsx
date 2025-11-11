import React, { useContext } from "react";
import ReviewItem from "./ReviewItem.jsx";
import ReviewForm from "./ReviewForm.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../redux/entities/restaurants/slice.jsx";
import { AuthContext } from "./AuthContext.jsx";
import { Link, useParams } from "react-router";
import MenuReviewsNav from "./MenuReviewsNav.jsx";

function ReviewsCard() {
  const params = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantsById(state, params.id),
  );
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      <MenuReviewsNav id={params.id} />
      <div>
        <h3>Reviews</h3>
        {restaurant.reviews.length === 0 ? (
          <div>
            <h2>No reviews</h2>
            <Link to={"/restaurants"}>To Restaurants</Link>
          </div>
        ) : (
          <>
            <ul>
              {restaurant.reviews.map((item) => (
                <ReviewItem item={item} key={item} />
              ))}
            </ul>
            <Link to={"/restaurants"}>To Restaurants</Link>
          </>
        )}
        {isAuth && (
          <>
            <h3>Leave feedback</h3>
            <ReviewForm restaurantId={params.id} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReviewsCard;
