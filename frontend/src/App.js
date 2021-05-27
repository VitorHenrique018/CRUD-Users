//instalar apollo client e graphqh
import React from 'react'
import { client } from './config/client-graphql'
import { ApolloProvider } from '@apollo/client';
import Listar from './pages/Listar'
import Criar from './pages/Criar'

//disponibilizar pros filhos os dados e os resultados, Usar ele no entrepoint da aplicacao

const App = () => {



  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Criar />
        <Listar />
      </div>
    </ApolloProvider>
  );
}

export default App;
