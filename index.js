const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress } = require('apollo-server-express')
const schema = require('./schema')
const SECRETKEY = require('./utils')
const jwt = require('express-jwt')

const app = express()

const PORT = 3000

const authmw = jwt({
  secret: SECRETKEY,
  credentialsRequired: false
})

app.use('/api', bodyParser.json(), authmw, graphqlExpress(req => ({
  schema,
  context: {
    user: req.user
  }
})))

app.listen(PORT, () => {
  console.log(`App running on localhost:${PORT}/api`)
})