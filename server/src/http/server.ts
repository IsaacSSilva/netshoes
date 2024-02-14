import fastify from 'fastify'
import { routerPrivateUser } from './routers/private/routers-private.js'
import { routerPublicUser } from './routers/public/routers-public.js'

const app = fastify()

/* routers Public */
app.register(routerPublicUser.creat)
app.register(routerPublicUser.delete)

/* routers private */
app.register(routerPrivateUser.get)

app.listen({ port: 3333 }).then(() => {
  console.log('Runner Server HTTP! 🔥')
})
