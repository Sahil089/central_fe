// src/slices/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import genericService from '../serviceFile';
import { API_ENDPOINTS } from '../apiEndpoints';

export const loginUser = createAsyncThunk(
  'auth/loginUser',

  async (credentials, thunkAPI) => {
    try {
      return await genericService.post(API_ENDPOINTS.login, credentials);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
