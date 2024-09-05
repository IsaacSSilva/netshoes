import type { Prisma } from "@prisma/client";
import type { RegisterProductRepository } from "../register-product-repositories.js";
import { prisma } from "@/lib/prisma.js";

export class ProductRepository implements RegisterProductRepository {
  async create(data: Prisma.ProductCreateInput) {
    const Product = await prisma.product.create({
      data
    })

    return Product
  }
}