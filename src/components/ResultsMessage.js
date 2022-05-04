import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import won from '../assets/imgs/victory.png';
import lose from '../assets/imgs/lose.png';
import '../sass/components/ResultsMessage.css';

class ResultsMessage extends Component {
  render() {
    const { rightAnswers } = this.props;
    const minRightAnswers = 3;

    return (
      <section className="ResultsMessage" data-testid="feedback-text">
        <div className="ResultsMessage-picture-container">
          {rightAnswers >= minRightAnswers ? (
            <img src={ won } alt="You won" />
          ) : (
            <img src={ lose } alt="" />
          )}
        </div>
        <p>{rightAnswers >= minRightAnswers ? 'Well Done!' : 'Could be better...'}</p>
      </section>
    );
  }
}

const mapStateToProps = ({ player: { rightAnswers } }) => ({
  rightAnswers,
});

ResultsMessage.propTypes = {
  rightAnswers: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(ResultsMessage);
