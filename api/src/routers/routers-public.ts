import { creatAddress } from '@/src/routers/client/registration/creat-address.js'
import { creatClients } from '@/src/routers/client/registration/creat-clients.js'
import { deleteClients } from '@/src/routers/client/registration/delete-clients.js'

export const routerPublicClients = {
  delete: deleteClients,
  creat: creatClients,
  address: creatAddress
}
