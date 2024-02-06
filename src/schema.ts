import { gql } from 'graphql-tag';

export const schema = gql`

  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key"])

  type Query {
    users: [User]!
  }

  type User @key(fields: "id") {
    id: ID!
    name: String!
    pets: [Pet]!
  }

  type Pet @key(fields: "id", resolvable: false) {
    id: ID!
  }
`