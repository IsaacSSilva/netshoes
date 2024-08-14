import type { FastifyReply, FastifyRequest } from "fastify"

export async function checkSessionDeveloper(request: FastifyRequest, reply: FastifyReply) {

  if(request.hostname != 'localhost:3333'){
    console.log(request.hostname);
    
    return reply.status(401).send({ error: 'Unauthorized.'})
  }
}