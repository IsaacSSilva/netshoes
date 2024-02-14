import fastify from 'fastify'
import {
  routerPrivateItem,
  routerPrivateUser
} from './routers/routers-vendor.js'
import { routerPublicUser } from './routers/routers-public.js'

const app = fastify()

/* routers Public */
app.register(routerPublicUser.creat)
// app.register(routerPublicUser.delete)

/* routers private */
app.register(routerPrivateUser.get)
app.register(routerPrivateItem.creat)
app.register(routerPrivateItem.get.All)
app.register(routerPrivateItem.delete)
app.register(routerPrivateItem.up)

app.listen({ port: 3333 }).then(() => {
  console.log('Runner Server HTTP! 🔥')
})
