import React from 'react';
import controller from '../assets/images/controller.png';
import wave from '../assets/images/wave.svg';
import LoginForm from '../components/LoginForm';
import '../sass/pages/Login.scss';

interface ILogin {
  history: {
    push: Function
  }
}

function Login({ history }: ILogin) {
  return (
    <main className="Login">
      <div className="Login-picture-container">
        <img src={controller} alt="controller" />
      </div>
      <LoginForm history={history} />
      <img className="Login-wave" src={wave} alt="" />
      <img className="Login-wave-upsidedown" src={wave} alt="" />
    </main>
  );
}

export default Login;
