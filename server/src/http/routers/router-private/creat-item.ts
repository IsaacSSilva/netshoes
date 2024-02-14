import type { FastifyInstance } from 'fastify'
import { prisma } from '../../../lib/prisma.js'
import { z } from 'zod'

export async function creatItem(app: FastifyInstance) {
  app.post('/items', async (request, reply) => {
    const creatItem = z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
      sort: z.string()
    })

    const { title, description, price, sort } = creatItem.parse(request.body)

    const item = await prisma.item.create({
      data: {
        title,
        description,
        price,
        sort
      }
    })

    return reply.status(201).send(item)
  })
}
