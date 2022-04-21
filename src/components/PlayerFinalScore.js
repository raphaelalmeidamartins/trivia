import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../sass/components/PlayerFinalScore.css';

class PlayerFinalScore extends Component {
  render() {
    const { rightAnswers, score } = this.props;

    return (
      <section className="PlayerFinalScore">
        <p>
          <strong>Score:</strong>
          <span data-testid="feedback-total-score">{ score }</span>
        </p>
        <p>
          <strong>Right answers:</strong>
          <span data-testid="feedback-total-question">{ rightAnswers }</span>
        </p>
      </section>
    );
  }
}

const mapStateToProps = ({ player: { rightAnswers, score } }) => ({
  rightAnswers,
  score,
});

PlayerFinalScore.propTypes = {
  rightAnswers: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(PlayerFinalScore);
