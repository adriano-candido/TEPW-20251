import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImage from '../../assets/logo.png';

export default function NewUser() {
    return (
       <div className="new-user-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="logo unichristus" />
                    <h1>Adicionar novo usuário</h1>
                    <p>Digite as informações do usuário</p>
                    <Link className="back-link" to="/user">
                        <FiArrowLeft size={16} color="#251FC5" />
                        Home
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome Completo" />
                    <input placeholder="E-mail" />
                    <input placeholder="Usuário" />
                    <input placeholder="Senha" type="password" />

                    <button className="button" type="submit">
                        Salvar
                    </button>
                </form>
            </div>
       </div>
    )
}