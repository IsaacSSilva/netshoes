import type { FastifyInstance } from 'fastify'
import { prisma } from '../../../../lib/prisma.js'

export async function getUsers(app: FastifyInstance) {
  app.get('/users', async (request, reply) => {
    const user = await prisma.users.findMany()

    return reply.status(200).send(user)
  })
}
