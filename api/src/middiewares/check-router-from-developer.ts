import type { FastifyReply, FastifyRequest } from "fastify"
import { env } from "@/env.js";

export async function CheckSessionDeveloper(request: FastifyRequest, reply: FastifyReply) {
  if(env.NODE_ENV === 'dev'){
    console.log(request.hostname);
    
    return reply.status(401).send({ error: 'Unauthorized.'})
  }
}