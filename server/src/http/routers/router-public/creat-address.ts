import type { FastifyInstance } from 'fastify'
import { prisma } from '../../../lib/prisma.js'
import { z } from 'zod'

export async function creatAddress(app: FastifyInstance) {
  app.post('/clients/:id/address', async (request, reply) => {
    const creatAddress = z.object({
      street: z.string(),
      addressee: z.string(),
      city: z.string(),
      state: z.string(),
      zip_code: z.number().int().min(8),
      house_number: z.string()
    })

    const { street, addressee, city, state, zip_code, house_number } =
      creatAddress.parse(request.body)

    const clientId = z.object({
      id: z.string().cuid()
    })

    const { id } = clientId.parse(request.params)

    const address = await prisma.address.create({
      data: {
        clientId: id,
        street,
        addressee,
        city,
        state,
        house_number,
        zip_code
      }
    })

    return reply.status(201).send(address)
  })
}
