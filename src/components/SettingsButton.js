import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoSettingsSharp } from 'react-icons/io5';

class SettingsButton extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/game/settings');
  };

  render() {
    return (
      <button
        type="button"
        data-testid="btn-settings"
        onClick={ this.handleClick }
      >
        <IoSettingsSharp />
        <span>Settings</span>
      </button>
    );
  }
}

SettingsButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SettingsButton;
