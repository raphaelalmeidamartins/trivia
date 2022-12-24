/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import IGame from '../../shared/types/IGame';

const initialState: IGame = {
  questions: [],
  round: 0,
  questionChosen: false,
  timer: 30,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setQuestions(state: IGame, action) {
      state.questions = action.payload;
    },
    setQuestionChosen(state: IGame) {
      state.questionChosen = true;
    },
    decreaseTimer(state: IGame) {
      if (state.timer > 0) {
        state.timer -= 1;
      }
    },
    nextRound(state: IGame) {
      if (state.round !== state.questions.length) {
        state.round += 1;
        state.questionChosen = false;
        state.timer = 30;
      }
    },
    resetGame(state: IGame) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setQuestions,
  setQuestionChosen,
  decreaseTimer,
  nextRound,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;
