import { PrismaProductRepository } from "@/repositories/prisma/product-repository.js";
import type { Product } from "@prisma/client";


interface CreateProductUseCase {
  title: string;
  description: string;
  cost: number;
  url_img: string;
  amount: number;
}

interface ProductUseCaseResponse {
  product: Product
}

export class ProductUseCase{

  constructor(private productRepository: PrismaProductRepository) {}

  async create({ cost, description, title, url_img, amount }: CreateProductUseCase): Promise<ProductUseCaseResponse> {
    
    const product = await this.productRepository.create({
      cost,
      description,
      title,
      url_img,
      amount,
    })

    return {
      product
    }

  }

}