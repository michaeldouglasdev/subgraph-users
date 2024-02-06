import { gql } from 'graphql-tag';

export const schema = gql`
  type Query {
    users: [User]!
  }

  type User {
    id: ID!
    name: String!
  }
`