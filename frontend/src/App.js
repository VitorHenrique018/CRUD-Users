//instalar apollo client e graphqh
import React, { useEffect } from 'react'
import { client } from './config/client-graphql'
import { gql } from '@apollo/client';

const App = () => {


  useEffect(() => {
    initial();

  }, []);

  function initial() {
    client.query({
      query: gql`
        query {
          users{
            name,
            email,
            id
          }
        }
      `
    }).then((res) => console.log(res.data))
  }


  return (
    <div className="App">
      <h1>FRONTEND</h1>
    </div>
  );
}

export default App;
