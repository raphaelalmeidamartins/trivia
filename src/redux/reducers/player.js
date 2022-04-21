import { QUESTION_CHOSEN, RESET_GAME, RESET_PLAYER, UPDATE_PLAYER_DATA } from '../actions';

const INITIAL_STATE = {
  name: '',
  rightAnswers: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_PLAYER_DATA:
    return {
      ...state,
      name: action.name,
      gravatarEmail: action.gravatarEmail,
    };
  case QUESTION_CHOSEN:
    return {
      ...state,
      score: state.score + action.score,
      rightAnswers: state.rightAnswers + action.rightAnswers,
    };
  case RESET_GAME:
    return {
      ...state,
      rightAnswers: 0,
      score: 0,
    };
  case RESET_PLAYER:
    return INITIAL_STATE;
  default:
    return state;
  }
};

export default player;
