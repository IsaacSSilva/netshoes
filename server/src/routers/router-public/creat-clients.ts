import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '@/lib/prisma.js'

export async function creatClients(app: FastifyInstance) {
  app.post('/clients', async (request, reply) => {
    const creatclient = z.object({
      name: z.string().toLowerCase().min(3),
      surname: z.string().toLowerCase().min(3),
      email: z.string().email().toLowerCase(),
      cpf: z.number().min(11).int().optional()
    })

    const { name, surname, email, cpf } = creatclient.parse(request.body)

    const client = await prisma.client.create({
      data: {
        email,
        name,
        surname,
        cpf
      }
    })

    return reply.status(201).send(client)
  })
}
