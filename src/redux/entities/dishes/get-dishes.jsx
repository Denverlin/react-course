import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk(
  "restaurants/getDishes",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/dishes");

    const result = await response.json();
    if (!result.length) {
      return rejectWithValue("empty result");
    }
    return result;
  },
);
