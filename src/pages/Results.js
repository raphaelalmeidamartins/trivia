import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import wave from '../assets/imgs/wave.svg';
import DisplayRankingButton from '../components/DisplayRankingButton';
import Header from '../components/Header';
import PlayAgainButton from '../components/PlayAgainButton';
import PlayerFinalScore from '../components/PlayerFinalScore';
import ResultsMessage from '../components/ResultsMessage';
import SettingsButton from '../components/SettingsButton';
import '../sass/pages/Results.css';

class Results extends Component {
  render() {
    const { playerName, history } = this.props;

    return (
      <main className="Results">
        { playerName === '' && <Redirect to="/" /> }
        <Header history={ history } isGameScreen={ false } />
        <ResultsMessage />
        <section className="Results-info">
          <PlayerFinalScore />
          <DisplayRankingButton history={ history } />
          <PlayAgainButton history={ history } />
          <SettingsButton history={ history } />
        </section>
        <img className="Login-wave" src={ wave } alt="" />
        <img className="Login-wave-upsidedown" src={ wave } alt="" />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  playerName: state.player.name,
});

Results.propTypes = {
  playerName: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Results);
