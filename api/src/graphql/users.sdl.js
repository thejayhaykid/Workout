export const schema = gql`
  type User {
    id: Int!
    username: String!
    name: String
    password: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    username: String!
    name: String
    password: String!
    email: String!
  }

  input UpdateUserInput {
    username: String
    name: String
    password: String
    email: String
  }
`
