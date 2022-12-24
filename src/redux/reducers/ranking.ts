/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import md5 from 'crypto-js/md5';

import IRanking, { IRankItem } from '../../shared/types/IRanking';

const initialState: IRanking = [];

const returnRanking = (resultsObject: IRankItem): IRanking => {
  const prevRanking = JSON.parse(localStorage.getItem('ranking') || '[]');
  if (!prevRanking.length) return [resultsObject] as IRanking;
  return [...prevRanking, resultsObject] as IRanking;
};

const getLocalStorageRanking = (): IRanking => {
  const savedRanking = JSON.parse(localStorage.getItem('ranking') || '[]');
  if (!savedRanking.length) return [] as IRanking;
  return savedRanking as IRanking;
};

const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    finalRound(state: IRanking, action) {
      const updatedRanking = returnRanking(
        {
          id: String(Date.now()),
          name: action.payload.name,
          score: action.payload.score,
          picture: `https://www.gravatar.com/avatar/${md5(action.payload.gravatarEmail).toString()}`,
        },
      );
      localStorage.setItem('ranking', JSON.stringify(updatedRanking));
      return updatedRanking;
    },
    getRanking(state: IRanking) {
      return getLocalStorageRanking();
    },
  },
});

export const {
  finalRound,
  getRanking,
} = rankingSlice.actions;

export default rankingSlice.reducer;
