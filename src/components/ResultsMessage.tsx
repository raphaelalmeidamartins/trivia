import React from 'react';
import { useSelector } from 'react-redux';
import lose from '../assets/images/lose.png';
import won from '../assets/images/victory.png';
import '../sass/components/ResultsMessage.scss';
import IStore from '../shared/types/IStore';

function ResultsMessage() {
  const MIN_RIGHT_ANSWERS = 3;
  const { rightAnswers } = useSelector((state: IStore) => state.player);

  return (
    <section className="ResultsMessage">
      <div className="picture-container">
        {rightAnswers >= MIN_RIGHT_ANSWERS ? (
          <img src={won} alt="You won" />
        ) : (
          <img src={lose} alt="" />
        )}
      </div>
      <p>
        {rightAnswers >= MIN_RIGHT_ANSWERS
          ? 'Well Done!'
          : 'Could be better...'}
      </p>
    </section>
  );
}

export default ResultsMessage;
