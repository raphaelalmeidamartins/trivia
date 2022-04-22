import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextButton from './NextButton';
import { RiSettings4Fill } from 'react-icons/ri';
import '../sass/components/Header.css';

class Header extends Component {
  render() {
    const { name, score, gravatarEmail, isGameScreen, history } = this.props;
    const maxDisplayLenght = 12;

    return (
      <header className="Header">
        <div className="Header-user-profile">
          <img src={ `https://www.gravatar.com/avatar/${md5(gravatarEmail).toString()}` } data-testid="header-profile-picture" alt="avatar" />
          <span data-testid="header-player-name">{ name.slice(0, maxDisplayLenght) }</span>
        </div>
        <div className="Score-container">
          <strong>Score:</strong>
          <span className="Score" data-testid="header-score">{ score }</span>
        </div>
        <div className="Header-buttons-container">
          { isGameScreen && <NextButton history={ history } /> }
          <button
            onClick={ () => history.push('/game/settings') }
            className="Header-settingsicon"
          >
            <RiSettings4Fill />
          </button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
  score: PropTypes.string,
  avatar: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any),
  isGameScreen: PropTypes.bool.isRequired,
}.isRequired;

const mapStateToProps = (state) => ({
  name: state.player.name,
  score: state.player.score,
  gravatarEmail: state.player.gravatarEmail,
});

export default connect(mapStateToProps, null)(Header);
