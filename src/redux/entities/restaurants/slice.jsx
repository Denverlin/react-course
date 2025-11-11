import { normalizedRestaurants } from "../../../components/data/normalized-mock.js";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantsIds: (restaurantsState) => restaurantsState.ids,
    selectRestaurantsById: (restaurantsState, id) =>
      restaurantsState.entities[id],
  },
});

export const { selectRestaurantsIds, selectRestaurantsById } =
  restaurantsSlice.selectors;
