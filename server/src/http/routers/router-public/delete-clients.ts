import type { FastifyInstance } from 'fastify'
import { prisma } from '../../../lib/prisma.js'
import { z } from 'zod'

export async function deleteClients(app: FastifyInstance) {
  app.delete('/profile/:id', async (request, reply) => {
    const clientId = z.object({
      id: z.string().cuid()
    })

    const clientPermission = z.object({
      permission: z.boolean()
    })

    const { id } = clientId.parse(request.params)
    const { permission } = clientPermission.parse(request.body)

    if (permission) {
      await prisma.client.delete({
        where: {
          id
        }
      })

      return reply.status(200).send()
    }

    return reply.status(400).send()
  })
}
