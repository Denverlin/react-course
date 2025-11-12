import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes.jsx";
import { getDishById } from "./get-dish-by-id.jsx";

const entityAdapter = createEntityAdapter();
export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectDishesIds: (dishesState) => dishesState.ids,
    selectRequestStatus: (dishesState) => dishesState.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = "fulfilled";
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

const selectDishesSlice = (state) => state.dishes;

export const { selectById: selectDishesById } =
  entityAdapter.getSelectors(selectDishesSlice);
