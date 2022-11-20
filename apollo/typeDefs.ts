import { gql } from '@apollo/client'

const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }

  type Book {
    id: String!
    title: String!
  }

  type Query {
    user: User!
    books: [Book!]!
  }
`;

export default typeDefs;
