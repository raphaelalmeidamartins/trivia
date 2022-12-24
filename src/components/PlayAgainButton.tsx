import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame, setQuestions } from '../redux/reducers/game';
import { resetPlayerGameData } from '../redux/reducers/player';
import { setToken } from '../redux/reducers/token';
import '../sass/components/PlayAgainButton.scss';
import { getQuestions, getToken } from '../services';
import IStore from '../shared/types/IStore';

interface IPlayAgainButton {
  history: {
    push: Function;
  };
}

function PlayAgainButton({ history }: IPlayAgainButton) {
  const dispatch = useDispatch();
  const settings = useSelector((state: IStore) => state.settings);

  const handleClick = async () => {
    const token = await getToken();
    const questions = await getQuestions(token, settings);

    dispatch(resetGame());
    dispatch(resetPlayerGameData());
    dispatch(setToken(token));
    dispatch(setQuestions(questions));

    history.push('/game');
  };

  return (
    <button className="PlayAgainButton" type="button" onClick={handleClick}>
      Play Again
    </button>
  );
}

export default PlayAgainButton;
