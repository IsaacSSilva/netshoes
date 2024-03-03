import type { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma.js'
import { z } from 'zod'

export async function getItemAll(app: FastifyInstance) {
  app.get('/peca', async (request, reply) => {
    const item = await prisma.item.findMany()

    return reply.status(200).send(item)
  })
}

export async function getItemUnique(app: FastifyInstance) {
  app.get('/item/:id', async (request, reply) => {
    const getItem = z.object({
      id: z.string().cuid()
    })

    const { id } = getItem.parse(request.params)

    const item = await prisma.item.findUnique({
      where: {
        id
      }
    })

    return reply.status(200).send(item)
  })
}
