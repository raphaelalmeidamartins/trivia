import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import '../sass/components/PlayAgainButton.css';
import { actionResetGame, actionGetToken } from '../redux/actions';

class PlayAgainButton extends React.Component {
  handleClick = () => {
    const { resetGame, requestToken, history, settings } = this.props;
    resetGame();
    requestToken(settings);
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
  settings: state.settings,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(actionResetGame()),
  requestToken: (settings) => dispatch(actionGetToken(settings)),
});

PlayAgainButton.propTypes = {
  token: PropTypes.string.isRequired,
  settings: PropTypes.objectOf(PropTypes.string),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  resetGame: PropTypes.func.isRequired,
  requestToken: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgainButton);
