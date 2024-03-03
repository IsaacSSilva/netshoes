import { creatAddress } from './router-public/creat-address.js'
import { creatClients } from './router-public/creat-clients.js'
import { deleteClients } from './router-public/delete-clients.js'

export const routerPublicClients = {
  delete: deleteClients,
  creat: creatClients,
  address: creatAddress
}
