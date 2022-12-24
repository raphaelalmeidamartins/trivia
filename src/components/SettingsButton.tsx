import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import '../sass/components/SettingsButton.scss';

interface ISettingsButton {
  history: {
    push: Function;
  };
}

function SettingsButton({ history }: ISettingsButton) {
  const handleClick = () => {
    history.push('/game/settings');
  };

  return (
    <button className="SettingsButton" type="button" onClick={handleClick}>
      <IoSettingsSharp />
      <span>Settings</span>
    </button>
  );
}

export default SettingsButton;
