import React from 'react';
import { useSelector } from 'react-redux';
import '../sass/components/PlayerFinalScore.scss';
import IStore from '../shared/types/IStore';

function PlayerFinalScore() {
  const { rightAnswers, score } = useSelector((state: IStore) => state.player);

  return (
    <section className="PlayerFinalScore">
      <p>
        <strong>Score:</strong>
        <span>{score}</span>
      </p>
      <p>
        <strong>Right answers:</strong>
        <span>{rightAnswers}</span>
      </p>
    </section>
  );
}

export default PlayerFinalScore;
