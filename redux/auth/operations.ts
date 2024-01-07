import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

axios.defaults.baseURL = "https://evvent-ta-recipes.onrender.com/";

const authHeader = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/signup",
  async (credentials: {}, thunkAPI) => {
    try {
      const { data } = await axios.post("auth/signup", credentials);
      return data;
    } catch (error) {
      if (error instanceof Error)
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/signin",
  async (credentials: {}, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/signin", credentials);
      authHeader.set(data.token);
      return data;
    } catch (error) {
      if (error instanceof Error)
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("/auth/signout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/signout");
    authHeader.unset();
  } catch (error) {
    if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      authHeader.set(persistedToken);
      const { data } = await axios.get("/auth/current");

      return data;
    } catch (error) {
      if (error instanceof Error)
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);
