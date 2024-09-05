import fastify from 'fastify'
import { appRoutes } from './http/routes.js'

const app = fastify()

app.register(appRoutes)

export { app }