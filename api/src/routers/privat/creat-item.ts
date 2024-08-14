import type { FastifyInstance } from 'fastify'
import { prisma } from '@/lib/prisma.js'
import { string, z } from 'zod'

export async function creatItem(app: FastifyInstance) {
  app.post('/peca', async (request, reply) => {
    const creatItem = z.object({
      title: z.string(),
      description: z.string(),
      piece: z.number().int(),
      imageURL: z.array(z.string().url()),
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
