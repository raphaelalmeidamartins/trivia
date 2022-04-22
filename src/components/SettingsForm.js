import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionUpdateSettings, actionResetGame, actionGetToken } from '../redux/actions';
import '../sass/components/SettingsForm.css';

class SettingsForm extends Component {
  constructor() {
    super();

    this.state = {
      amount: '5',
      category: '',
      difficulty: '',
      type: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = () => {
    const { history, updateSettings, resetGame, requestToken } = this.props;
    updateSettings(this.state);
    resetGame();
    requestToken(this.state);
    history.push('/game');
  };

  render() {
    const { amount, category, difficulty, type } = this.state;

    return (
      <form className="SettingsForm">
        <h1>Settings</h1>
        <label htmlFor="amount">
          Number of questions:
          <select
            name="amount"
            value={ amount }
            onChange={ this.handleChange }
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
        <label htmlFor="category">
          Category:
          <select
            name="category"
            value={ category }
            onChange={ this.handleChange }
          >
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
          </select>
        </label>
        <label htmlFor="difficulty">
          Difficulty:
          <select
            name="difficulty"
            value={ difficulty }
            onChange={ this.handleChange }
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label htmlFor="type">
          Type:
          <select
            name="type"
            value={ type }
            onChange={ this.handleChange }
          >
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Done
        </button>
        <p>Powered by <a href="https://opentdb.com/">Open Trivia Database</a></p>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateSettings: (state) => dispatch(actionUpdateSettings(state)),
  resetGame: () => dispatch(actionResetGame()),
  requestToken: (settings) => dispatch(actionGetToken(settings)),
});

SettingsForm.propTypes = {
  updateSettings: PropTypes.func.isRequired,
  requestToken: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(SettingsForm);
