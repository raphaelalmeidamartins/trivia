import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AnimatedForms from '../assets/imgs/AnimatedForms';
import Header from '../components/Header';
import Question from '../components/Question';
import '../sass/pages/Game.css';
import { actionGetToken } from '../redux/actions';

class Game extends Component {
  componentDidMount() {
    const { questions, requestToken, settings } = this.props;
    if (!questions) requestToken(settings);
  }

  shuffleAnswers = (currQuestion) => {
    if (currQuestion) {
      const shuffle = 0.5;
      return [
        currQuestion.correct_answer,
        ...currQuestion.incorrect_answers,
      ].sort(() => Math.random() - shuffle);
    }
  };

  render() {
    const { questions, playerName, currRound, history } = this.props;

    return (
      <main className="Game">
        <AnimatedForms />
        { playerName === '' && <Redirect to="/" /> }
        <Header history={ history } isGameScreen />
        <Question
          currQuestion={ questions[currRound] }
          answers={ this.shuffleAnswers(questions[currRound]) }
        />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  settings: state.settings,
  questions: state.game.questions,
  currRound: state.game.round,
  playerName: state.player.name,
});

const mapDispatchToProps = (dispatch) => ({
  requestToken: () => dispatch(actionGetToken()),
});

Game.propTypes = {
  settings: PropTypes.objectOf(PropTypes.string).isRequired,
  questions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]).isRequired,
  currRound: PropTypes.number.isRequired,
  playerName: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
