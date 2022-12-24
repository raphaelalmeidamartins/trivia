import React, { ChangeEvent, FormEvent, useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { RiGameFill, RiUser3Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import trivia from '../assets/images/trivia.png';
import { setQuestions } from '../redux/reducers/game';
import { updatePlayerData } from '../redux/reducers/player';
import { setToken } from '../redux/reducers/token';
import { getQuestions, getToken } from '../services';

import '../sass/components/LoginForm.scss';
import IStore from '../shared/types/IStore';
import SettingsButton from './SettingsButton';

interface ILoginForm {
  history: {
    push: Function;
  };
}

function LoginForm({ history }: ILoginForm) {
  const [name, setName] = useState('');
  const [gravatarEmail, setGravatarEmail] = useState('');
  const [redirect, setRedirect] = useState(false);

  const settings = useSelector((state: IStore) => state.settings);
  const dispatch = useDispatch();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.name === 'name') {
      setName(target.value);
    } else {
      setGravatarEmail(target.value);
    }
  };

  const handleDisableButton = () => {
    const emailRegExp = /^([a-z0-9]{1,}[._]{0,1}[a-z0-9]{1,})*(@[a-z0-9]{1,}.com)$/i;
    if (name.length === 0 || !gravatarEmail.match(emailRegExp)) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!handleDisableButton()) {
      const token = await getToken();
      const questions = await getQuestions(token, settings);

      dispatch(setToken(token));
      dispatch(setQuestions(questions));
      dispatch(updatePlayerData({ name, gravatarEmail }));
      setRedirect(true);
    }
  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      {redirect && <Redirect to="/game" />}
      <img className="LoginForm__logo" src={trivia} alt="Trivia" />
      <h1>to play</h1>
      <label htmlFor="input-player-name">
        <input
          id="input-player-name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <span className="LoginForm__icon">
          <RiUser3Fill />
        </span>
      </label>
      <label htmlFor="input-gravatar-email">
        <input
          id="input-gravatar-email"
          name="gravatarEmail"
          type="email"
          placeholder="Enter your email"
          value={gravatarEmail}
          onChange={handleChange}
        />
        <span className="LoginForm__icon">
          <MdEmail />
        </span>
      </label>
      <button type="submit" disabled={handleDisableButton()}>
        <RiGameFill />
        <span>Play</span>
      </button>
      <SettingsButton history={history} />
      <p>
        Powered by
        <a href="https://opentdb.com/">Open Trivia Database</a>
      </p>
      <p>
        Some SVG Backgrounds by
        <a target="_blank" rel="noreferrer" href="https://bgjar.com">
          BGJar
        </a>
      </p>
    </form>
  );
}

export default LoginForm;
