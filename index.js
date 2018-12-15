import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress } from 'apollo-server-express'
import schema from './schema'
import { authmw } from './utils'

const app = express()

const PORT = 3000

app.use('/api', bodyParser.json(), authmw, graphqlExpress(req => ({
  schema,
  context: {
    user: req.user
  }
})))

app.listen(PORT, () => {
  console.log(`App running on localhost:${PORT}/api`)
})