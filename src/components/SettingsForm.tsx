import React, {
  ChangeEvent, FormEvent, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { resetGame, setQuestions } from '../redux/reducers/game';
import { resetPlayerGameData } from '../redux/reducers/player';
import { setSettings } from '../redux/reducers/settings';
import { setToken } from '../redux/reducers/token';
import '../sass/components/SettingsForm.scss';
import { getQuestions, getToken } from '../services';

interface ISettingsButton {
  history: {
    push: Function,
  }
}

function SettingsForm({ history }: ISettingsButton) {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState('5');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = target.name as 'amount' | 'category' | 'difficulty' | 'type';
    const { value } = target;

    const setState = {
      amount: setAmount,
      category: setCategory,
      difficulty: setDifficulty,
      type: setType,
    };

    setState[name](value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const settings = {
      amount,
      category,
      difficulty,
      type,
    };
    const token = await getToken();
    const questions = await getQuestions(token, settings);

    dispatch(setSettings(settings));
    dispatch(resetGame());
    dispatch(resetPlayerGameData());
    dispatch(setToken(token));
    dispatch(setQuestions(questions));

    history.push('/game');
  };

  return (
    <form className="SettingsForm" onSubmit={handleSubmit}>
      <h1>Settings</h1>
      <label htmlFor="amount">
        Number of questions:
        <select
          name="amount"
          value={amount}
          onChange={handleChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </label>
      <label htmlFor="category">
        Category:
        <select
          name="category"
          value={category}
          onChange={handleChange}
        >
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
      </label>
      <label htmlFor="difficulty">
        Difficulty:
        <select
          name="difficulty"
          value={difficulty}
          onChange={handleChange}
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <label htmlFor="type">
        Type:
        <select
          name="type"
          value={type}
          onChange={handleChange}
        >
          <option value="">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
      </label>
      <button
        type="submit"
      >
        Done
      </button>
      <p>
        Powered by
        <a href="https://opentdb.com/">Open Trivia Database</a>
      </p>
    </form>
  );
}

export default SettingsForm;
