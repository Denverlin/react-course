import React from "react";
import { Link } from "react-router";

function MenuReviewsNav({ id }) {
  return (
    <div>
      <Link to={`/restaurant/${id}/menu`}>Меню</Link>
      <Link to={`/restaurant/${id}/reviews`}>Отзывы</Link>
    </div>
  );
}

export default MenuReviewsNav;
