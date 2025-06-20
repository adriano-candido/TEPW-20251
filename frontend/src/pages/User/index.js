import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';


import './styles.css';
import logoImage from '../../assets/logo.png';

export default function User() {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        api.get("v1/user/all").then(response => {
            setUsers(response.data);
        });
    }, [])

    async function deleteUser(id) {
        try {
            await api.delete(`v1/user/${id}`)

            setUsers(users.filter(user => user.id !== id))

        } catch (err) {
            const message = err.response?.data?.message || "Erro insperado";
            alert(message);
        }
    }

    async function editUser(id){
        navigate(`/user/new/${id}`)
    }

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
                {users.map(user =>
                    <li>
                        <strong>ID</strong>
                        <p>{user.id}</p>
                        <strong>Nome Completo</strong>
                        <p>{user.name}</p>
                        <strong>E-mail</strong>
                        <p>{user.email}</p>
                        <strong>Usuário</strong>
                        <p>{user.login}</p>

                        <button onClick={() => editUser(user.id)} type="button>">
                            <FiEdit size={20} color="#251FC5" />
                        </button>

                        <button onClick={() => deleteUser(user.id)} type="button>">
                            <FiTrash2 size={20} color="#251FC5" />
                        </button>
                    </li>
                )}

            </ul>
        </div>
    )
}