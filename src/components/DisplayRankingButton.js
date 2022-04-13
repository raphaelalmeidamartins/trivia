import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './DisplayRankingButton.css';

class DisplayRankingButton extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/game/ranking');
  };

  render() {
    return (
      <button
        className="DisplayRankingButton"
        type="button"
        data-testid="btn-ranking"
        onClick={ this.handleClick }
      >
        Ranking
      </button>
    );
  }
}

DisplayRankingButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default DisplayRankingButton;
