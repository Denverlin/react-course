import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviewById = createAsyncThunk(
  "restaurants/getReviewById",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/review/${id}`);

    const result = await response.json();
    if (!result) {
      return rejectWithValue("no data");
    }
    return result;
  },
);
