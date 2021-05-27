import React from 'react';
import { gql, useQuery } from '@apollo/client'


const GET_USERS = gql`
query {
    users{
      name,
      email,
      id
    }
  }
`

const Listar = () => {

    const { loading, data } = useQuery(GET_USERS);

    if (loading) return <div>Carregando...</div>

    return (
        <div>
            <h2>Todos Usuários Cadastrados</h2>
            {data.users.map((index) => (
                <>
                <p>{index.name}</p>
                <p>{index.email}</p>
                </>
            ))}
        </div>
    )
}

export default Listar;