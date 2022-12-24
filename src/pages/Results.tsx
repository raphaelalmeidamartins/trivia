import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import wave from '../assets/images/wave.svg';
import DisplayRankingButton from '../components/DisplayRankingButton';
import Header from '../components/Header';
import PlayAgainButton from '../components/PlayAgainButton';
import PlayerFinalScore from '../components/PlayerFinalScore';
import ResultsMessage from '../components/ResultsMessage';
import SettingsButton from '../components/SettingsButton';
import '../sass/pages/Results.scss';
import IStore from '../shared/types/IStore';

interface IResults {
  history: {
    push: Function;
  };
}

function Results({ history }: IResults) {
  const { name: playerName } = useSelector((state: IStore) => state.player);

  return (
    <main className="Results">
      {playerName === '' && <Redirect to="/" />}
      <Header history={history} isGameScreen={false} />
      <ResultsMessage />
      <section className="Results-info">
        <PlayerFinalScore />
        <DisplayRankingButton history={history} />
        <PlayAgainButton history={history} />
        <SettingsButton history={history} />
      </section>
      <img className="Login-wave" src={wave} alt="" />
      <img className="Login-wave-upsidedown" src={wave} alt="" />
    </main>
  );
}

export default Results;
