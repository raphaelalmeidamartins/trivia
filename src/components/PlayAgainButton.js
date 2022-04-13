import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './PlayAgainButton.css';
import { actionResetGame, actionGetToken } from '../redux/actions';

class PlayAgainButton extends React.Component {
  handleClick = () => {
    const { resetGame, requestToken, history } = this.props;
    resetGame();
    requestToken();
    history.push('/game');
  };

  render() {
    return (
      <button
        className="PlayAgainButton"
        type="button"
        data-testid="btn-play-again"
        onClick={ this.handleClick }
      >
        Play Again
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(actionResetGame()),
  requestToken: () => dispatch(actionGetToken()),
});

PlayAgainButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  resetGame: PropTypes.func.isRequired,
  requestToken: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgainButton);
