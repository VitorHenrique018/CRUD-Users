import React, { useState } from 'react';

const Criar = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <h2>Cadastrar Usuário</h2>
            <input
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button>ADICIONAR</button>
        </div>
    )
}

export default Criar;