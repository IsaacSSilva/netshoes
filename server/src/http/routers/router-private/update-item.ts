import { z } from 'zod'
import { prisma } from '../../../lib/prisma.js'
import type { FastifyInstance } from 'fastify'

export async function updateItem(app: FastifyInstance) {
  app.patch('/item/:id', async (request, reply) => {
    const idItem = z.object({
      id: z.string().cuid()
    })

    const updateItem = z.object({
      title: z.string().min(3).optional(),
      description: z.string().min(3).optional(),
      piece: z.number().optional().optional(),
      imageURL: z.string().array().optional(),
      about: z.string().optional()
    })

    const { title, description, piece, imageURL, about } = updateItem.parse(
      request.body
    )

    const { id } = idItem.parse(request.params)

    if (title || description || piece || imageURL || about) {
      const item = await prisma.item.update({
        where: {
          id
        },
        data: {
          title,
          description,
          piece,
          imageURL,
          about
        }
      })
      return reply.status(200).send(item)
    }

    return reply.status(400).send({ mensagem: 'not update' })
  })
}
