import { gql } from '@apollo/client'

const typeDefs = gql`
  type Query {
    user: User!
    book(id: ID!): Book
    books(limit: Int): [Book!]!
  }

  type User {
    id: String!
    name: String!
    role: String!
  }

  type Book {
    id: String!
    title: String!
    creators: [Creator!]
    image: BookImage!
    stock: Int!
    users: [User!]
  }

  type BookImage {
    small: String!
    medium: String!
    large: String!
  }

  type Creator {
    id: String!
    name: String!
    role: String
  }
`;

export default typeDefs;
