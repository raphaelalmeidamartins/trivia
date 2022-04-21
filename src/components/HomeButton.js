import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../sass/components/HomeButton.css';
import { actionResetGame, actionResetPlayer } from '../redux/actions';

class HomeButton extends Component {
  handleClick = () => {
    const { resetGame, resetPlayer, history } = this.props;
    resetGame();
    resetPlayer()
    history.push('/');
  };

  render() {
    return (
      <button
        className="HomeButton"
        type="button"
        data-testid="btn-go-home"
        onClick={ this.handleClick }
      >
        Home
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(actionResetGame()),
  resetPlayer: () => dispatch(actionResetPlayer()),
});

HomeButton.propTypes = {
  resetGame: PropTypes.func,
  resetPlayer: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(HomeButton);
