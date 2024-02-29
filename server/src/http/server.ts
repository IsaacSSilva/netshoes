import fastify from 'fastify'
import {
  routerPrivateItem,
  routerPrivateClient
} from './routers/routers-vendor.js'
import { routerPublicClients } from './routers/routers-public.js'

const app = fastify()

/* routers Public */
app.register(routerPublicClients.creat)
app.register(routerPublicClients.delete)

/* routers private */
app.register(routerPrivateClient.get)
app.register(routerPrivateItem.creat)
app.register(routerPrivateItem.get.All)
app.register(routerPrivateItem.delete)
app.register(routerPrivateItem.up)

app.get('/', () => {
  return 'Hello'
})

app.listen({ port: 3333 }).then(() => {
  console.log('Runner Server HTTP! 🔥')
})
