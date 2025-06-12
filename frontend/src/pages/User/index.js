import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import logoImage from '../../assets/logo.png';

export default function User() {
    return (
        <div className="user-container">
            <header>
                <img src={logoImage} alt="logo unichristus" />
                <span>Bem vindo, <strong>Fulano de tal</strong></span>
                <Link className="button" to="/user/new">
                    Adicionar Usuário
                </Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <h1>Usuários Cadastrados</h1>
            <ul>
                <li>
                    <strong>ID</strong>
                    <p>1</p>
                    <strong>Nome Completo</strong>
                    <p>João</p>
                    <strong>E-mail</strong>
                    <p>joao@gmail.com</p>
                    <strong>Usuário</strong>
                    <p>jao</p>

                    <button type="button>">
                        <FiEdit size={20} color="#251FC5" />
                    </button>

                    <button type="button>">
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>

                </li>

                <li>
                    <strong>ID</strong>
                    <p>1</p>
                    <strong>Nome Completo</strong>
                    <p>João</p>
                    <strong>E-mail</strong>
                    <p>joao@gmail.com</p>
                    <strong>Usuário</strong>
                    <p>jao</p>

                    <button type="button>">
                        <FiEdit size={20} color="#251FC5" />
                    </button>

                    <button type="button>">
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>

                </li>

                <li>
                    <strong>ID</strong>
                    <p>1</p>
                    <strong>Nome Completo</strong>
                    <p>João</p>
                    <strong>E-mail</strong>
                    <p>joao@gmail.com</p>
                    <strong>Usuário</strong>
                    <p>jao</p>

                    <button type="button>">
                        <FiEdit size={20} color="#251FC5" />
                    </button>

                    <button type="button>">
                        <FiTrash2 size={20} color="#251FC5" />
                    </button>

                </li>

            </ul>

        </div>
    )
}