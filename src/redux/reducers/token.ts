/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state: string, action) {
      return action.payload;
    },
  },
});

export const {
  setToken,
} = tokenSlice.actions;

export default tokenSlice.reducer;
