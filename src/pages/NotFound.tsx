import React from 'react';
import error404 from '../assets/images/error404.png';
import wave from '../assets/images/wave.svg';
import HomeButton from '../components/HomeButton';
import '../sass/pages/NotFound.scss';

interface INotFound {
  history: {
    push: Function
  }
}

function NotFound({ history }: INotFound) {
  return (
    <main className="NotFound">
      <div className="NotFound-container">
        <div className="NotFound-picture-container">
          <img src={error404} alt="Erro 404: página não encontrada" />
        </div>
        <div className="NotFound-button-container">
          <HomeButton history={history} />
        </div>
      </div>
      <img className="NotFound-wave" src={wave} alt="" />
      <img className="NotFound-wave-upsidedown" src={wave} alt="" />
    </main>
  );
}

export default NotFound;
