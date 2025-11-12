import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants.jsx";
import { getRestaurantById } from "./get-restaurants-by-id.jsx";

const entityAdapter = createEntityAdapter();
export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

const selectRestaurantsSlice = (sate) => sate.restaurants;
export const { selectById: selectRestaurantsById } = entityAdapter.getSelectors(
  selectRestaurantsSlice,
);
export const { selectRestaurantsIds, selectRequestStatus } =
  restaurantsSlice.selectors;
