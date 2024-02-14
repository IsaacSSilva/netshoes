import type { FastifyInstance } from 'fastify'
import { prisma } from '../../../lib/prisma.js'
import { z } from 'zod'

export async function deleteUsers(app: FastifyInstance) {
  app.delete('/profile/:id', async (request, reply) => {
    const userId = z.object({
      id: z.string().cuid()
    })

    const UserPermission = z.object({
      permission: z.boolean()
    })

    const { id } = userId.parse(request.params)
    const { permission } = UserPermission.parse(request.body)

    if (permission) {
      await prisma.users.delete({
        where: {
          id
        }
      })

      return reply.status(200).send()
    }

    return reply.status(400).send()
  })
}
