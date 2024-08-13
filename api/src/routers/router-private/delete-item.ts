import { z } from 'zod'
import { prisma } from '@/lib/prisma.js'
import type { FastifyInstance } from 'fastify'

export async function deleteItem(app: FastifyInstance) {
  app.delete('/peca/:id', async (request, reply) => {
    const deleteItem = z.object({
      id: z.string().cuid()
    })

    const { id } = deleteItem.parse(request.params)

    await prisma.item.delete({
      where: {
        id
      }
    })

    return reply.status(200).send()
  })
}
