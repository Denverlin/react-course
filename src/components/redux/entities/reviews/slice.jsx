import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../data/normalized-mock.js";

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewsIds: (reviewsState) => reviewsState.ids,
    selectReviewsById: (reviewsState, id) => reviewsState.entities[id],
  },
});

export const { selectReviewsIds, selectReviewsById } = reviewsSlice.selectors;
