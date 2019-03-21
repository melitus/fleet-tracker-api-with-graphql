import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import winston from 'winston'

import schema from '../graphql/'
import { models } from '../models/'
import { appKey } from '../config/credentials'

// open mongoose connection
require('../config/mongoose')

const app = express()
const context = {
  models
}
const server = new ApolloServer({
  schema,
  context,
  introspection: true,
  playground: true
})
server.applyMiddleware({ app, path: '/graphql' })

app.listen(appKey.port, () => {
  winston.info(` 🚀 Apollo Server on http://localhost:${appKey.port}/graphql`)
})

export default app
