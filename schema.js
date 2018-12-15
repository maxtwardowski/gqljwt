const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

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
  }

  type Mutation {
    login (username: String!, password: String!): String
  }
`
module.exports = makeExecutableSchema({ typeDefs, resolvers })