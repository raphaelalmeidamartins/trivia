import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import game from './game';
import ranking from './ranking';
import settings from './settings';

const rootReducer = combineReducers({ player, token, game, ranking, settings });

export default rootReducer;
