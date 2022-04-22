import { UPDATE_SETTINGS } from "../actions";

const INITIAL_STATE = {
  amount: '5',
  category: '',
  difficulty: '',
  type: '',
};

const settings = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_SETTINGS:
    return {
      ...state,
      ...action.settings,
    }
  default:
    return state;
  }
};

export default settings;
