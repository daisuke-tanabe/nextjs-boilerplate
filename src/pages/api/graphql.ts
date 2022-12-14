import { gql } from '@apollo/client';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

const typeDefs = gql`
  type User {
    user: String
  }

  type Query {
    user: User
  }
`;

const resolvers = {
  Query: {
    user: () => ({
      status: 'ok',
    }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server, {
});
