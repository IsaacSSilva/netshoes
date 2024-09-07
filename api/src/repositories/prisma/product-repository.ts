import type { Prisma } from "@prisma/client";
import type { ProductRepository } from "../product-repositories.js";
import { prisma } from "@/lib/prisma.js";

export class PrismaProductRepository implements ProductRepository {
  async create(data: Prisma.ProductCreateInput) {
    const Product = await prisma.product.create({
      data
    })

    return Product
  }
}