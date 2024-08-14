import fastify from 'fastify'
const app = fastify()

import { creatAddress } from '@/src/routers/client/registration/creat-address.js'
import { creatClients } from '@/src/routers/client/registration/creat-clients.js'
import { deleteClients } from '@/src/routers/client/registration/delete-clients.js'
import { getClient, getClientUnique } from './routers/privat/client/get-client.js'
import { updateItem } from './routers/privat/update-item.js'
import Hello from './routers/@Dev/Hello.js'

app.register(Hello)

app.register(creatAddress)
app.register(creatClients)
app.register(deleteClients)

app.register(getClient)
app.register(getClientUnique)
app.register(updateItem)

export { app }