import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../../lib/prisma.js'

export async function creatUsers(app: FastifyInstance) {
  app.post('/users', async (request, reply) => {
    const creatUser = z.object({
      name: z.string().toLowerCase().min(3),
      surname: z.string().toLowerCase().min(3),
      email: z.string().toLowerCase().email()
    })

    const { name, surname, email } = creatUser.parse(request.body)

    await prisma.users.create({
      data: {
        name,
        surname,
        email
      }
    })

    return reply.status(201).send()
  })
}
