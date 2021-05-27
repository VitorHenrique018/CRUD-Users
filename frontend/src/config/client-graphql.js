import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'http://localhost:4000',      //onde esta hospedada a URL da API
    cache: new InMemoryCache(), //boas praticas
});