import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImage from '../../assets/logo.png';

export default function NewUser() {
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function createOrUpdateUser(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            login,
            password,
        }

        try {
            await api.post('v1/user', data);

            navigate('/user');
        } catch (err) {
            const message = err.response?.data?.message || "Erro insperado";
            alert(message);
        }


    }

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

                <form onSubmit={createOrUpdateUser}>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome Completo" />
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="E-mail" />
                    <input
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        placeholder="Usuário" />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha" type="password" />

                    <button className="button" type="submit">
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    )
}