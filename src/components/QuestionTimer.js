import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionDecreaseTimer, actionQuestionChosen } from '../redux/actions';
import './QuestionTimer.css';

class QuestionTimer extends Component {
  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {
    const { timer, questionChosen, pickQuestion } = this.props;
    const initialTimer = 30;
    if (timer === 0 || questionChosen) {
      clearInterval(this.intervalID);
      pickQuestion(0);
    }
    if (timer === initialTimer) this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  startTimer = () => {
    const { decreaseTimer } = this.props;
    const second = 1000;

    this.intervalID = setInterval(decreaseTimer, second);
  }

  render() {
    const { timer } = this.props;

    return (
      <span className="QuestionTimer">{timer}</span>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.game.timer,
  questionChosen: state.game.questionChosen,
});

const mapDispatchToProps = (dispatch) => ({
  decreaseTimer: () => dispatch(actionDecreaseTimer()),
  pickQuestion: (score) => dispatch(actionQuestionChosen(score)),
});

QuestionTimer.propTypes = {
  timer: PropTypes.number.isRequired,
  decreaseTimer: PropTypes.func.isRequired,
  pickQuestion: PropTypes.func.isRequired,
  questionChosen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTimer);
