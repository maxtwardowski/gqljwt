import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

// Define our schema using the GraphQL schema language
const typeDefs = `
  type User {
    id: Int!
    username: String!
  }

  type Query {
    me: User
    users: [User]
    user(id: Int!): User
    test: String
  }

  type Mutation {
    login (username: String!, password: String!): String
  }
`
export default makeExecutableSchema({ typeDefs, resolvers })