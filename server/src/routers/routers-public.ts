import { creatAddress } from '@/routers/router-public/creat-address.js'
import { creatClients } from '@/routers/router-public/creat-clients.js'
import { deleteClients } from '@/routers/router-public/delete-clients.js'

export const routerPublicClients = {
  delete: deleteClients,
  creat: creatClients,
  address: creatAddress
}
