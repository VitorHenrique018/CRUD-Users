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
    const [addTodo, { data }] = useMutation(ADD_CONTATO);

    const addUser = async () => {
        try {
            const response = await addTodo({
                variables: { name: nome, email: email }
            });
            console.log(response)
        }
        catch (error) {
            console.log("ERROU")
        }
    }

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
            <button onClick={addUser}>ADICIONAR</button>
        </div>
    )
}

export default Criar;