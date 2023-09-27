import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMessage } from "@reduxjs/toolkit/dist/actionCreatorInvariantMiddleware";

export const fetchMessage = createAsyncThunk(
  "messages/getMessage",
  async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/api/random_greeting");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.greeting;
    } catch (error) {
      return error;
    }
  }
);

initialState = {
  error: undefined,
  message: undefined,
  pending: false,
};

const messagesSlices = createSlice({
  name: "messages",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, (state) => {
        return { ...state, pending: true };
      })
      .addCase(getMessage.fulfilled, (state, { payload }) => {
        return { ...state, message: payload, pending: false };
      })
      .addCase(getMessage.rejected, (state, { payload }) => {
        return { ...state, error: payload, pending: false };
      });
  },
});

export default messagesSlices.reducer;
