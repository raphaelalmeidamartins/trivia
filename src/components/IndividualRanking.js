import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './IndividualRanking.css';

class IndividualRanking extends Component {
  render() {
    const { name, score, picture, index } = this.props;
    return (
      <li className="IndividualRanking">
        <span className="IndividualRanking-rank">{index + 1}</span>
        <div className="IndividualRanking-profile">
          <img className="IndividualRanking-avatar" src={ picture } alt={ name } />
          <span
            className="IndividualRanking-name"
            data-testid={ `player-name-${index}` }
          >
            {name}
          </span>
        </div>
        <span
          className="IndividualRanking-score"
          data-testid={ `player-score-${index}` }
        >
          {score}
        </span>
      </li>
    );
  }
}

IndividualRanking.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  picture: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default IndividualRanking;
