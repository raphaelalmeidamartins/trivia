import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { decreaseTimer, setQuestionChosen } from '../redux/reducers/game';
import { setPlayerResults } from '../redux/reducers/player';
import '../sass/components/QuestionTimer.scss';
import IStore from '../shared/types/IStore';

interface IQuestionTimer {
  timer: number,
  handleDecreaseTimer: Function,
  handlePickQuestion: Function,
  questionChosen: boolean,
}

let intervalID: any;

class QuestionTimer extends Component<IQuestionTimer> {
  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {
    const { timer, questionChosen, handlePickQuestion } = this.props;
    const initialTimer = 30;
    if (timer === 0 || questionChosen) {
      clearInterval(intervalID);
      handlePickQuestion(0);
    }
    if (timer === initialTimer) this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(intervalID);
  }

  startTimer = () => {
    const { handleDecreaseTimer } = this.props;
    const second = 1000;

    intervalID = setInterval(handleDecreaseTimer, second);
  };

  render() {
    const { timer } = this.props;

    return (
      <span className="QuestionTimer">{timer}</span>
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  timer: state.game.timer,
  questionChosen: state.game.questionChosen,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  handleDecreaseTimer: () => dispatch(decreaseTimer()),
  handlePickQuestion: (score: number) => {
    dispatch(setQuestionChosen());
    dispatch(setPlayerResults(score));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTimer);
