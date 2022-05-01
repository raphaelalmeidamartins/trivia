import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MdEmail } from 'react-icons/md';
import { RiGameFill, RiUser3Fill } from 'react-icons/ri';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import trivia from '../assets/imgs/trivia.png';
import {
  actionGetToken,
  actionUpdatePlayerData
} from '../redux/actions';
import '../sass/components/LoginForm.css';
import SettingsButton from './SettingsButton';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      gravatarEmail: '',
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = () => {
    const { requestToken, updatePlayerData, settings } = this.props;
    const { name, gravatarEmail } = this.state;
    requestToken(settings);
    updatePlayerData({ name, gravatarEmail });
    this.setState({ redirect: true });
  }

  handleDisableButton = () => {
    const { name, gravatarEmail } = this.state;
    const emailRegExp = /^([a-z0-9]{1,}[._]{0,1}[a-z0-9]{1,})*(@[a-z0-9]{1,}.com)$/i;
    if (name.length === 0 || !gravatarEmail.match(emailRegExp)) {
      return true;
    }
    return false;
  };

  render() {
    const { name, gravatarEmail, redirect } = this.state;
    const { history } = this.props;

    return (
      <form className="LoginForm">
        { redirect && <Redirect to="/game" /> }
        <img className="LoginForm-logo" src={ trivia } alt="Trivia" />
        <h1>Sign in to play</h1>
        <label htmlFor="input-player-name">
          <input
            id="input-player-name"
            data-testid="input-player-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={ name }
            onChange={ this.handleChange }
          />
          <span className="LoginForm-icon">
            <RiUser3Fill />
          </span>
        </label>
        <label htmlFor="input-gravatar-email">
          <input
            id="input-gravatar-email"
            data-testid="input-gravatar-email"
            name="gravatarEmail"
            type="email"
            placeholder="Enter your email"
            value={ gravatarEmail }
            onChange={ this.handleChange }
          />
          <span className="LoginForm-icon">
            <MdEmail />
          </span>
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ this.handleDisableButton() }
          onClick={ this.handleSubmit }
        >
          <RiGameFill />
          <span>Play</span>
        </button>
        <SettingsButton history={ history } />
        <p>Powered by <a href="https://opentdb.com/">Open Trivia Database</a></p>
        <p>Some SVG Backgrounds by <a target="_blank" rel="noreferrer" href="https://bgjar.com">BGJar</a></p>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  settings: state.settings,
})

const mapDispatchToProps = (dispatch) => ({
  requestToken: (settings) => dispatch(actionGetToken(settings)),
  updatePlayerData: (state) => dispatch(actionUpdatePlayerData(state)),
});

LoginForm.propTypes = {
  settings: PropTypes.objectOf(PropTypes.string),
  requestToken: PropTypes.func.isRequired,
  updatePlayerData: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
