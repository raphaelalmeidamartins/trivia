import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SettingsForm from '../components/SettingsForm';
import '../sass/pages/Settings.css';
import wave from '../assets/imgs/wave.svg';

class Settings extends Component {
  render() {
    const { history } = this.props;

    return (
      <main className="Settings">
        <SettingsForm history={ history } />
        <img className="Settings-wave" src={ wave } alt="" />
        <img className="Settings-wave-upsidedown" src={ wave } alt="" />
      </main>
    );
  }
}

Settings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Settings;
