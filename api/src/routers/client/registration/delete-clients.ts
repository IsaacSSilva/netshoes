import type { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma.js'
import { z } from 'zod'

export async function deleteClients(app: FastifyInstance) {
  app.delete('/profile/:id', async (request, reply) => {
    const clientId = z.object({
      id: z.string().cuid()
    })

    const { id } = clientId.parse(request.params)

    await prisma.client.delete({
      where: {
        id
      }
    })

    return reply.status(200).send()
  })
}
