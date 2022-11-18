import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next'

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    message: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    message: () => 'hello world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server)
