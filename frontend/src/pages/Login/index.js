import React from 'react';
import './styles.css';

import logoImage from '../../assets/logo.png';
import padLock from '../../assets/padlock.png';

export default function Login() {

  return (
    <div className="login-container">
      <section className="form">
          <img src={logoImage} alt="logo unichristus"/>
          <form>
              <h1>Acesse sua Conta</h1>
              <input placeholder="Usuário" />
              <input type="password" placeholder="Senha" />

              <button className="button">Entrar</button>
          </form>
      </section>
        <img src={padLock} alt="imagem de cadeado do login"/>
    </div>
  );
}