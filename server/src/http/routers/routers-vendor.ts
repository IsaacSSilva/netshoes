import { creatItem } from './router-private/creat-item.js'
import { deleteItem } from './router-private/delete-item.js'
import { getItemAll, getItemUnique } from './router-private/get-item.js'
import { getUsers } from './router-private/get-users.js'
import { updateItem } from './router-private/update-item.js'

export const routerPrivateUser = {
  get: getUsers
}

export const routerPrivateItem = {
  creat: creatItem,
  get: {
    All: getItemAll,
    Unique: getItemUnique
  },
  delete: deleteItem,
  up: updateItem
}
