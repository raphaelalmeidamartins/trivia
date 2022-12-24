import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextRound } from '../redux/reducers/game';
import { finalRound } from '../redux/reducers/ranking';
import '../sass/components/NextButton.scss';
import IStore from '../shared/types/IStore';
import QuestionTimer from './QuestionTimer';

interface INextButton {
  history: {
    push: Function
  },
}

function NextButton({
  history,
}: INextButton) {
  const dispatch = useDispatch();

  const {
    round,
    questions,
    questionChosen,
  } = useSelector((state: IStore) => state.game);
  const playerResult = useSelector((state: IStore) => state.player);

  const handleClick = () => {
    if (round < questions.length - 1) dispatch(nextRound());
    if (round === questions.length - 1) {
      dispatch(finalRound(playerResult));
      history.push('/game/results');
    }
  };

  return (
    <>
      {questionChosen && (
        <button className="NextButton" type="button" onClick={handleClick}>
          Next
        </button>
      )}
      {!questionChosen && <QuestionTimer />}
    </>
  );
}

export default NextButton;
