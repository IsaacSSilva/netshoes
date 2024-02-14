import { getUsers } from './router-private/get-users.js'
import { deleteUsers } from '../public/router-public/remove-users.js'

export const routerPrivateUser = {
  // delete: deleteUsers,
  get: getUsers
}
