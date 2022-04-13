import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import game from './game';
import ranking from './ranking';

const rootReducer = combineReducers({ player, token, game, ranking });

export default rootReducer;
