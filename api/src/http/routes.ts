import type { FastifyInstance } from "fastify";
import { RegisterProduct } from "./controllers/register-product.js";

export async function appRoutes(app: FastifyInstance) {
  app.post('/', RegisterProduct)
}