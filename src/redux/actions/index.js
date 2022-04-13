import md5 from 'crypto-js/md5';
import { getQuestions, getToken } from '../../services';

const GET_TOKEN = 'GET_TOKEN';
const UPDATE_PLAYER_DATA = 'UPDATE_PLAYER_DATA';
const GET_QUESTIONS = 'GET_QUESTIONS';
const QUESTION_CHOSEN = 'QUESTION_CHOSEN';
const NEXT_ROUND = 'NEXT_ROUND';
const DECREASE_TIMER = 'DECREASE_TIMER';
const FINAL_ROUND = 'FINAL_ROUND';
const GET_RANKING = 'GET_RANKING';
const RESET_GAME = 'RESET_GAME';

function actionGetQuestions(token) {
  return async (dispatch) => {
    const questions = await getQuestions(token);
    dispatch({
      type: GET_QUESTIONS,
      questions,
    });
  };
}

function actionGetToken() {
  return async (dispatch) => {
    const token = await getToken();
    dispatch({
      type: GET_TOKEN,
      token,
    });
    dispatch(actionGetQuestions(token));
  };
}

function actionUpdatePlayerData({ name, gravatarEmail }) {
  return {
    type: UPDATE_PLAYER_DATA,
    name,
    gravatarEmail,
  };
}

function actionQuestionChosen(score) {
  return {
    type: QUESTION_CHOSEN,
    score,
    assertion: score > 0 ? 1 : 0,
  };
}

function actionDecreaseTimer() {
  return {
    type: DECREASE_TIMER,
  };
}

function actionNextRound() {
  return {
    type: NEXT_ROUND,
  };
}

function actionFinalRound({ name, score, gravatarEmail }) {
  return {
    type: FINAL_ROUND,
    name,
    score,
    picture: `https://www.gravatar.com/avatar/${md5(gravatarEmail).toString()}`,
  };
}

function actionGetRanking() {
  return {
    type: GET_RANKING,
  };
}

function actionResetGame() {
  return {
    type: RESET_GAME,
  };
}

export {
  actionGetToken,
  GET_TOKEN,
  actionUpdatePlayerData,
  UPDATE_PLAYER_DATA,
  GET_QUESTIONS,
  actionGetQuestions,
  actionQuestionChosen,
  QUESTION_CHOSEN,
  actionNextRound,
  NEXT_ROUND,
  actionDecreaseTimer,
  DECREASE_TIMER,
  FINAL_ROUND,
  actionFinalRound,
  GET_RANKING,
  actionGetRanking,
  RESET_GAME,
  actionResetGame,
};
