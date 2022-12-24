import React from 'react';
import wave from '../assets/images/wave.svg';
import SettingsForm from '../components/SettingsForm';
import '../sass/pages/Settings.scss';

interface ISettings {
  history: {
    push: Function;
  };
}

function Settings({ history }: ISettings) {
  return (
    <main className="Settings">
      <SettingsForm history={history} />
      <img className="Settings-wave" src={wave} alt="" />
      <img className="Settings-wave-upsidedown" src={wave} alt="" />
    </main>
  );
}

export default Settings;
