/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import IPlayer from '../../shared/types/IPlayer';

const initialState: IPlayer = {
  name: '',
  rightAnswers: 0,
  score: 0,
  gravatarEmail: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updatePlayerData(state: IPlayer, action) {
      state.name = action.payload.name;
      state.gravatarEmail = action.payload.gravatarEmail;
    },
    setPlayerResults(state: IPlayer, action) {
      state.score += action.payload;
      state.rightAnswers += action.payload > 0 ? 1 : 0;
    },
    resetPlayerGameData(state: IPlayer) {
      state.rightAnswers = 0;
      state.score = 0;
    },
    resetPlayer(state: IPlayer) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  updatePlayerData,
  setPlayerResults,
  resetPlayerGameData,
  resetPlayer,
} = playerSlice.actions;

export default playerSlice.reducer;
