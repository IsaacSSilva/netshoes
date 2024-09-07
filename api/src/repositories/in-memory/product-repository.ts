import { Product, Prisma, } from "@prisma/client";
import { ProductRepository } from "../product-repositories.js";

export class InMemoryProductRepository implements ProductRepository {
  public products: Product[] = []

  async create({ amount, cost, description, title, url_img }: Prisma.ProductCreateInput) {
    
    const product = {
      id: 1,
      title,
      description,
      cost,
      url_img,
      amount,
    }

    this.products.push(product)

    return product
  }
}