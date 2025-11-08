import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/slice.jsx";
import { dishesSlice } from "./entities/dishes/slice.jsx";
import { reviewsSlice } from "./entities/reviews/slice.jsx";
import { cartSlice } from "./entities/cart/slice.jsx";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});
