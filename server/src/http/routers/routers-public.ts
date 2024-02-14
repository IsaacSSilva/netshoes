import { creatUsers } from './router-public/creat-users.js'
import { deleteUsers } from './router-public/delete-users.js'

export const routerPublicUser = {
  delete: deleteUsers,
  creat: creatUsers
}
