import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews.jsx";
import { getReviewById } from "./get-review-by-id.jsx";

const entityAdapter = createEntityAdapter();
export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state, action) => {
        state.requestStatus = "pending";
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";
        entityAdapter.setAll(state, payload);
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getReviewById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

const selectReviewsSlice = (sate) => sate.reviews;
export const { selectById: selectReviewsById } =
  entityAdapter.getSelectors(selectReviewsSlice);
export const { selectReviewsIds, selectRequestStatus } = reviewsSlice.selectors;
