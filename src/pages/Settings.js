import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SettingsForm from '../components/SettingsForm';
// import '../sass/pages/Settings.css';

class Settings extends Component {
  render() {
    const { history } = this.props;

    return (
      <main className="Settings">
        <SettingsForm history={ history } />
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
