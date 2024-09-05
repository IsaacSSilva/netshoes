import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ProductUseCase as Product } from "@/use-cases/register-product-use-cases.js";
import { ProductRepository } from "@/repositories/prisma/prisma-product-repository.js";

export async function RegisterProduct(request: FastifyRequest, reply: FastifyReply ) {

  const productSchemaBody = z.object({
    title: z.string().min(3),
    description: z.string(),
    cost: z.number().min(0).nonnegative(),
    url_img: z.string().url(),
    amount: z.number().min(0).nonnegative()
  })

  const { title, description, cost, url_img, amount, } = productSchemaBody.parse(request.body)

  const ProductReporisoty = new ProductRepository()

  const registerProduct = new Product(ProductReporisoty)

  registerProduct.create({
    title, 
    description, 
    cost, 
    url_img,
    amount, 
  })

  return reply.status(201).send(
    { 
      menssage: `Create success Product: ${title}`, 
      Product: title
    }
  )
}