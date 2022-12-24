import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../redux/reducers/game';
import { resetPlayer, resetPlayerGameData } from '../redux/reducers/player';
import '../sass/components/HomeButton.scss';

interface IHomeButton {
  history: {
    push: Function;
  };
}

function HomeButton({ history }: IHomeButton) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetGame());
    dispatch(resetPlayerGameData());
    dispatch(resetPlayer());
    history.push('/');
  };

  return (
    <button className="HomeButton" type="button" onClick={handleClick}>
      Home
    </button>
  );
}

export default HomeButton;
