import type { FastifyInstance } from 'fastify'
import { prisma } from '../../../lib/prisma.js'
import { z } from 'zod'

export async function getClient(app: FastifyInstance) {
  app.get('/clients', async (request, reply) => {
    const user = await prisma.client.findMany()

    return reply.status(200).send(user)
  })
}

export async function getClientUnique(app: FastifyInstance) {
  app.get('/client/:id', async (request, reply) => {
    const getClient = z.object({
      id: z.string().cuid()
    })

    const { id } = getClient.parse(request.params)

    const user = await prisma.client.findMany({
      where: {
        id
      },
      include: {
        address: {}
      }
    })

    return reply.status(200).send(user)
  })
}
