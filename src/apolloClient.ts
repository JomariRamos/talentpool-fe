import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:5286/graphql' }), //change to environment variables
  cache: new InMemoryCache(),
});

export default client;
