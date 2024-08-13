import fastify from 'fastify'
import {
  routerPrivateItem,
  routerPrivateClient
} from '@/routers/routers-vendor.js'
import { routerPublicClients } from '@/routers/routers-public.js'


const app = fastify()

/* routers Public */
app.register(routerPublicClients.creat)
app.register(routerPublicClients.delete)
app.register(routerPublicClients.address)

// /* routers private */
app.register(routerPrivateClient.get.All)
app.register(routerPrivateClient.get.Unique)
app.register(routerPrivateItem.creat)
app.register(routerPrivateItem.get.All)
app.register(routerPrivateItem.get.Unique)
app.register(routerPrivateItem.delete)
app.register(routerPrivateItem.up)

app.get('/', () => {
  return 'Hello'
})

export { app }