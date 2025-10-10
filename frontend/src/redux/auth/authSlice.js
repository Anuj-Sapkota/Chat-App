import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "./authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    success: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
