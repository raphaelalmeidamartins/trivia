import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionFinalRound, actionNextRound } from '../redux/actions';
import QuestionTimer from './QuestionTimer';
import './NextButton.css';

class NextButton extends Component {
  handleClick = () => {
    const { round, goToNextRound, history, playerRecord, recordPlayerData } = this.props;
    const finalRound = 4;
    if (round < finalRound) goToNextRound();
    if (round === finalRound) {
      recordPlayerData(playerRecord);
      history.push('/game/results');
    }
  };

  render() {
    const { questionChosen } = this.props;

    return (
      <>
        {questionChosen && (
          <button
            className="NextButton"
            data-testid="btn-next"
            type="button"
            onClick={ this.handleClick }
          >
            Next
          </button>
        )}
        {!questionChosen && <QuestionTimer />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  round: state.game.round,
  questionChosen: state.game.questionChosen,
  playerRecord: state.player,
});

const mapDispatchToProps = (dispatch) => ({
  goToNextRound: () => dispatch(actionNextRound()),
  recordPlayerData: (playerState) => dispatch(actionFinalRound(playerState)),
});

NextButton.propTypes = {
  round: PropTypes.number.isRequired,
  goToNextRound: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  questionChosen: PropTypes.bool.isRequired,
  playerRecord: PropTypes.objectOf(PropTypes.any).isRequired,
  recordPlayerData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
