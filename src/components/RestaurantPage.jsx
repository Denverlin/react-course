import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../redux/entities/restaurants/slice.jsx";
import MenuReviewsNav from "./MenuReviewsNav.jsx";

function RestaurantPage() {
  const params = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantsById(state, params.id),
  );
  return (
    <div>
      <div>{restaurant.name}</div>
      <MenuReviewsNav id={params.id} />
    </div>
  );
}

export default RestaurantPage;
