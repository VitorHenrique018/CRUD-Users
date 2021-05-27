import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client'


const ADD_CONTATO = gql`
mutation createUser($name: String!, $email: String!){
        createUser(name: $name, email: $email) {
            id,
            name,
            email
        }
}
`

const Criar = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [addTodo, { data2 }] = useMutation(ADD_CONTATO);

    return (
        <div>
            <h2>Cadastrar Usuário</h2>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo({ variables: { name: nome, email: email } });
                }}
            >
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
                <button type="submit">ADICIONAR</button>
            </form>
        </div>
    )
}

export default Criar;