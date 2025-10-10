import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "./authActions";
import { LOGIN_PAGE } from "@/constants/routes";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    success: false,
    error: null,
  },
  reducers:{
    logout: (state)=>{
      state.user = null;
    }
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

export const {logout} = authSlice.actions;
export default authSlice.reducer;
