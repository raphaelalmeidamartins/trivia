import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './PlayerFinalScore.css';

class PlayerFinalScore extends Component {
  render() {
    const { assertions, score } = this.props;

    return (
      <section className="PlayerFinalScore">
        <p>
          <strong>Score:</strong>
          <span data-testid="feedback-total-score">{ score }</span>
        </p>
        <p>
          <strong>Right answers:</strong>
          <span data-testid="feedback-total-question">{ assertions }</span>
        </p>
      </section>
    );
  }
}

const mapStateToProps = ({ player: { assertions, score } }) => ({
  assertions,
  score,
});

PlayerFinalScore.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(PlayerFinalScore);
