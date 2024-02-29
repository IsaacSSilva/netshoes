import { creatClients } from './router-public/creat-clients.js'
import { deleteClients } from './router-public/delete-clients.js'

export const routerPublicUser = {
  delete: deleteClients,
  creat: creatClients
}
