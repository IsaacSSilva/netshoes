# server

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run server.ts
```

This project was created using `bun init` in bun v1.0.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

node.js`

import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../../lib/prisma.js'

export async function creatClients(app: FastifyInstance) {
  app.post('/clients', async (request, reply) => {
    const creatclient = z.object({
      name: z.string().toLowerCase().min(3),
      surname: z.string().toLowerCase().min(3),
      email: z.string().email().toLowerCase(),
      cpf: z.number().min(11).int().optional()
    })

    const creatAddress = z.object({
      street: z.string().optional(),
      addressee: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      zip_code: z.number().int().min(8).optional(),
      house_number: z.string().optional()
    })

    const { street, addressee, city, state, zip_code, house_number } =
      creatAddress.parse(request.body)

    const { name, surname, email, cpf } = creatclient.parse(request.body)

    const client = await prisma.client.create({
      data: {
        email,
        name,
        surname,
        cpf,
        address: {
          create: {
            street,
            addressee,
            city,
            state,
            zip_code,
            house_number
          }
        }
      },
      include: {
        address: {}
      }
    })

    return reply.status(201).send(client)
  })
}


`