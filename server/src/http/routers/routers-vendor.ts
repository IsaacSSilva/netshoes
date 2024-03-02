import { creatItem } from './router-private/creat-item.js'
import { deleteItem } from './router-private/delete-item.js'
import { getItemAll, getItemUnique } from './router-private/get-item.js'
import {
  getClient,
  getClientUnique
} from './router-private/clients/get-client.js'
import { updateItem } from './router-private/update-item.js'

export const routerPrivateClient = {
  get: {
    All: getClient,
    Unique: getClientUnique
  }
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
