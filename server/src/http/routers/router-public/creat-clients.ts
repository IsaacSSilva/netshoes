import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma.js'

export async function creatClients(app: FastifyInstance) {
  app.post('/clients', async (request, reply) => {
    const creatclient = z.object({
      name: z.string().toLowerCase().min(3),
      surname: z.string().toLowerCase().min(3),
      email: z.string().toLowerCase().email(),
      cpf: z.number().int()
    })

    const { name, surname, email, cpf } = creatclient.parse(request.body)

    await prisma.client.create({
      data: {
        name,
        surname,
        email,
        cpf
      }
    })

    return reply.status(201).send()
  })
}
