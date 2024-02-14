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
      price: z.number().optional(),
      sort: z.string().min(3).optional(),
      sale: z.number().optional(),
      promotion: z.boolean().optional()
    })

    const { title, description, price, sort, sale, promotion } =
      updateItem.parse(request.body)

    const { id } = idItem.parse(request.params)

    if (title || description || price || sort || sale || promotion) {
      const item = await prisma.item.update({
        where: {
          id
        },
        data: {
          title,
          description,
          price,
          sort,
          sale,
          promotion
        }
      })
      return reply.status(200).send(item)
    }

    return reply.status(400).send({ mensagem: 'not update' })
  })
}
