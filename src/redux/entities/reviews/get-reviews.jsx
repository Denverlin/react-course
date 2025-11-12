import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk(
  "restaurants/getReviews",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/reviews");

    const result = await response.json();
    if (!result.length) {
      return rejectWithValue("empty result");
    }
    return result;
  },
);
