import { configureStore } from '@reduxjs/toolkit';
import token from '../reducers/token';
import game from '../reducers/game';
import player from '../reducers/player';
import ranking from '../reducers/ranking';
import settings from '../reducers/settings';

const store = configureStore({
  reducer: {
    token,
    game,
    player,
    ranking,
    settings,
  },
});

export default store;
