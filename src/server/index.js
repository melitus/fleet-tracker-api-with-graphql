import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from '../graphql/'
import { models } from '../models/'

const port = 4000

const app = express()
const context = {
  models
}
const server = new ApolloServer({
  schema,
  context
})
server.applyMiddleware({ app, path: '/graphql' })

app.listen(port, () => {
  console.log(' 🚀 Apollo Server on http://localhost:4000/graphql')
})
