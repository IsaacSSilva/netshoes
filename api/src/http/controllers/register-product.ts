import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ProductUseCase as Product } from "@/use-cases/product-use-cases.js";
import { PrismaProductRepository } from "@/repositories/prisma/product-repository.js";

export async function RegisterProduct(request: FastifyRequest, reply: FastifyReply ) {

  const productSchemaBody = z.object({
    title: z.string().min(3),
    description: z.string(),
    cost: z.number().min(0).nonnegative(),
    url_img: z.string().url(),
    amount: z.number().min(0).nonnegative()
  })

  const { title, description, cost, url_img, amount, } = productSchemaBody.parse(request.body)

  const ProductReporisoty = new PrismaProductRepository()

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