import type { FastifyInstance } from 'fastify'
import { prisma } from '../../../lib/prisma.js'
import { z } from 'zod'

export async function creatItem(app: FastifyInstance) {
  app.post('/items', async (request, reply) => {
    const creatItem = z.object({
      title: z.string(),
      description: z.string(),
      piece: z.number().int(),
      imageURL: z.string().array(),
      about: z.string()
    })

    const { title, description, imageURL, about, piece } = creatItem.parse(
      request.body
    )

    const item = await prisma.item.create({
      data: {
        title,
        imageURL,
        description,
        about,
        piece
      }
    })

    return reply.status(201).send(item)
  })
}
