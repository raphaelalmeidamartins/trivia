import md5 from 'crypto-js/md5';
import React from 'react';
import { RiSettings4Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import '../sass/components/Header.scss';
import NextButton from './NextButton';

interface IHeader {
  history: { push: Function };
  isGameScreen: boolean;
}

function Header({ isGameScreen, history }: IHeader) {
  const MAX_DISPLAY_LENGTH = 12;

  const { name, score, gravatarEmail } = useSelector((state: any) => ({
    name: state.player.name,
    score: state.player.score,
    gravatarEmail: state.player.gravatarEmail,
  }));

  return (
    <header className="Header">
      <div className="user-profile">
        <img
          src={`https://www.gravatar.com/avatar/${md5(
            gravatarEmail,
          ).toString()}`}
          alt="avatar"
        />
        <span>{name.slice(0, MAX_DISPLAY_LENGTH)}</span>
      </div>
      <div className="score-container">
        <strong>Score:</strong>
        <span>{score}</span>
      </div>
      <div className="buttons-container">
        {isGameScreen && <NextButton history={history} />}
        <button
          type="button"
          onClick={() => history.push('/game/settings')}
          className="Header-settingsicon"
        >
          <RiSettings4Fill />
        </button>
      </div>
    </header>
  );
}

export default Header;
