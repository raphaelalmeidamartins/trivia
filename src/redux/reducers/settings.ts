import { createSlice } from '@reduxjs/toolkit';

import ISettings from '../../shared/types/ISettings';

const initialState: ISettings = {
  amount: '5',
  category: '',
  difficulty: '',
  type: '',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings(_state: ISettings, action) {
      return action.payload;
    },
  },
});

export const {
  setSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
