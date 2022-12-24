import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AnimatedForms from '../assets/images/AnimatedForms';
import Header from '../components/Header';
import Question from '../components/Question';
import { setQuestions } from '../redux/reducers/game';
import { setToken } from '../redux/reducers/token';
import '../sass/pages/Game.scss';
import { getQuestions, getToken } from '../services';
import IStore from '../shared/types/IStore';

interface IGame {
  history: {
    push: Function;
  };
}

function Game({ history }: IGame) {
  const dispatch = useDispatch();

  const settings = useSelector((state: IStore) => state.settings);
  const { questions, round } = useSelector((state: IStore) => state.game);
  const { name: playerName } = useSelector((state: IStore) => state.player);

  const [answers, setAnswers] = useState([] as string[]);

  useEffect(() => {
    const requestToken = async () => {
      const token = await getToken();
      const newQuestions = await getQuestions(token, settings);

      dispatch(setToken(token));
      dispatch(setQuestions(newQuestions));
    };

    if (!questions) requestToken();
  }, [questions, settings]);

  useEffect(() => {
    const currQuestion = questions[round];

    if (currQuestion) {
      const shuffle = 0.5;
      setAnswers([
        currQuestion.correct_answer,
        ...currQuestion.incorrect_answers,
      ].sort(() => Math.random() - shuffle));
    }
  }, [round]);

  return (
    <main className="Game">
      <AnimatedForms />
      {playerName === '' && <Redirect to="/" />}
      <Header history={history} isGameScreen />
      <Question
        currQuestion={questions[round]}
        answers={answers}
      />
    </main>
  );
}

export default Game;
