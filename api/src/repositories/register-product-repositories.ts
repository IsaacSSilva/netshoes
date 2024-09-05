import type { Prisma, Product } from "@prisma/client";

export interface RegisterProductRepository {
  create(data: Prisma.ProductCreateInput): Promise<Product>
}