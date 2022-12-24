import React from 'react';
import '../sass/components/DisplayRankingButton.scss';

interface IDisplayRankingButton {
  history: {
    push: Function;
  };
}

function DisplayRankingButton({ history }: IDisplayRankingButton) {
  const handleClick = () => {
    history.push('/game/ranking');
  };

  return (
    <button
      className="DisplayRankingButton"
      type="button"
      onClick={handleClick}
    >
      Ranking
    </button>
  );
}

export default DisplayRankingButton;
