import { creatItem } from '@/routers/router-private/creat-item.js'
import { deleteItem } from '@/routers/router-private/delete-item.js'
import { getItemAll, getItemUnique } from '@/routers/router-private/get-item.js'
import {
  getClient,
  getClientUnique
} from '@/routers/router-private/clients/get-client.js'
import { updateItem } from '@/routers/router-private/update-item.js'

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
