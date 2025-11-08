import React from "react";
import Button from "./ui/Button.jsx";
import { Link, useParams } from "react-router";

function MenuReviewsNav() {
  let params = useParams();
  return (
    <div>
      <Link to={`/restaurant/${params.id}/menu`}>
        <Button text={"Меню"} />
      </Link>
      <Link to={`/restaurant/${params.id}/reviews`}>
        <Button text={"Отзывы"} />
      </Link>
    </div>
  );
}

export default MenuReviewsNav;
