import type { FastifyInstance } from 'fastify'
import { prisma } from '../../../../lib/prisma.js'
import { z } from 'zod'

export async function getClient(app: FastifyInstance) {
  app.get('/users', async (request, reply) => {
    const user = await prisma.client.findMany()

    return reply.status(200).send(user)
  })
}

export async function getClientUnique(app: FastifyInstance) {
  app.get('/user', async (request, reply) => {
    const getClient = z.object({
      cpf: z.number().optional(),
      id: z.string().optional(),
      email: z.string().email().optional()
    })

    const { cpf, id, email } = getClient.parse(request.body)

    const user = await prisma.client.findUnique({
      where: {
        id,
        OR: [{ cpf, email }]
      }
    })

    return reply.status(200).send(user)
  })
}
