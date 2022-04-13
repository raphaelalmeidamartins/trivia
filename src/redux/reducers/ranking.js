import { FINAL_ROUND, GET_RANKING } from '../actions';

const INITIAL_STATE = [];

const returnRanking = (resultsObject) => {
  const prevRanking = JSON.parse(localStorage.getItem('ranking'));
  if (!prevRanking) return [resultsObject];
  if (prevRanking) return [...prevRanking, resultsObject];
};

const getLocalStorageRanking = () => {
  const savedRanking = JSON.parse(localStorage.getItem('ranking'));
  if (!savedRanking) return [];
  if (savedRanking) return savedRanking;
};

const ranking = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FINAL_ROUND: {
    const updatedRanking = returnRanking(
      {
        name: action.name,
        score: action.score,
        picture: action.picture,
      },
    );
    localStorage.setItem('ranking', JSON.stringify(updatedRanking));
    return updatedRanking;
  }
  case GET_RANKING:
    return getLocalStorageRanking();
  default:
    return state;
  }
};

export default ranking;
