import { LoginApi, RegisterApi } from "@/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

//login thunk
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await LoginApi(data);
      localStorage.setItem("authToken", response.data.authToken);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

//register thunk
export const registerAsync = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
  try {
    const response = await RegisterApi(data);
    localStorage.setItem("authToken", response.data.authToken);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data);
  }
});

