import PropTypes from 'prop-types';
import React from 'react';
import './PlayAgainButton.css';

class PlayAgainButton extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/');
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

PlayAgainButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PlayAgainButton;
