import { checkSessionDeveloper } from "@/src/middiewares/check-router-from-developer.js"
import type { FastifyInstance } from "fastify"

export default async function Hello(app: FastifyInstance) {
  app.get('/hello',
    {
      preHandler: [checkSessionDeveloper]
    }, (request, reply) => {

    const logFromDeveloper = `

    Time: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getMilliseconds()} 

    [${request.method}] - IP:${request.ip} | { 
      hostname: ${request.hostname} 
      url: ${request.url} 
    }
    `

    console.log(logFromDeveloper)

    return reply.status(200).send({ Hello: 'World' })
  })

  app.get('/dev', (request, reply) => {

    const logFromDeveloper = `[${request.method}] - IP:${request.ip} | ${request.url}`

    console.log(logFromDeveloper)

    return reply.redirect('https://github.com/IsaacGSS?tab=repositories')
  })
}