import { decode } from 'he';
import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import loadingBubble from '../assets/images/loading-bubble.gif';
import { setQuestionChosen } from '../redux/reducers/game';
import { setPlayerResults } from '../redux/reducers/player';
import '../sass/components/Question.scss';
import IQuestionObject from '../shared/types/IQuestionObject';
import IStore from '../shared/types/IStore';

interface IQuestion {
  currQuestion: IQuestionObject;
  answers: string[];
  handlePickQuestion: Function;
  questionChosen: boolean;
  timer: number;
}

class Question extends Component<IQuestion> {
  handleHighlightQuestions = (correctAnswer: string, currAnswer: string) => {
    const { questionChosen } = this.props;
    if (!questionChosen) return 'Question__option';
    if (correctAnswer === currAnswer) return 'Question__option Question-right';
    return 'Question__option Question__wrong';
  };

  handlePickQuestion = (
    option: string,
    rightAnswer: string,
    difficulty: string,
    timer: number,
  ) => {
    const { handlePickQuestion } = this.props;
    const multipliers = { hard: 3, medium: 2, easy: 1 };
    const isRight = option === rightAnswer;
    const minPoints = 10;
    const score = isRight
      ? minPoints
        + multipliers[difficulty as 'hard' | 'medium' | 'easy'] * timer
      : 0;
    handlePickQuestion(score);
  };

  render() {
    const {
      timer, currQuestion, answers, questionChosen,
    } = this.props;

    return (
      <section className="Question">
        {!currQuestion && (
          <img
            className="Question__loading-bubble"
            src={loadingBubble}
            alt="Loading..."
          />
        )}
        {currQuestion && (
          <>
            <h1>{currQuestion.category}</h1>
            <p>{decode(currQuestion.question)}</p>
            <ul>
              {answers.map((option) => (
                <button
                  key={option}
                  className={this.handleHighlightQuestions(
                    currQuestion.correct_answer,
                    option,
                  )}
                  type="button"
                  onClick={() => this.handlePickQuestion(
                    option,
                    currQuestion.correct_answer,
                    currQuestion.difficulty,
                    timer,
                  )}
                  disabled={timer === 0 || questionChosen}
                >
                  {decode(option)}
                </button>
              ))}
            </ul>
          </>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  questionChosen: state.game.questionChosen,
  timer: state.game.timer,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  handlePickQuestion: (score: number) => {
    dispatch(setQuestionChosen());
    dispatch(setPlayerResults(score));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
