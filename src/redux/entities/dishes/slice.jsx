import { normalizedDishes } from "../../../components/data/normalized-mock.js";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {}),
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  selectors: {
    selectDishesIds: (dishesState) => dishesState.ids,
    selectDishesById: (dishesState, id) => dishesState.entities[id],
  },
});

export const { selectDishesIds, selectDishesById } = dishesSlice.selectors;
