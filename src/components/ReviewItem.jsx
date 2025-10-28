import React from "react";
import { useSelector } from "react-redux";
import { selectReviewsById } from "./redux/entities/reviews/slice.jsx";

function ReviewItem({ item }) {
  const review = useSelector((state) => selectReviewsById(state, item));
  return <li key={review.id}>{review.text}</li>;
}

export default ReviewItem;
