import React, { Component } from 'react';
import PropTypes from 'prop-types';
import error404 from '../assets/imgs/error404.png';
import wave from '../assets/imgs/wave.svg';
import HomeButton from '../components/HomeButton';
import '../sass/pages/NotFound.css';

class NotFound extends Component {
  render() {
    const { history } = this.props;

    return (
      <main className="NotFound">
        <div className="NotFound-container">
          <div className="NotFound-picture-container">
            <img src={ error404 } alt="Erro 404: página não encontrada" />
          </div>
          <div className="NotFound-button-container">
            <HomeButton history={ history } />
          </div>
        </div>
        <img className="NotFound-wave" src={ wave } alt="" />
        <img className="NotFound-wave-upsidedown" src={ wave } alt="" />
      </main>
    );
  }
}

NotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}.isRequired;

export default NotFound;
