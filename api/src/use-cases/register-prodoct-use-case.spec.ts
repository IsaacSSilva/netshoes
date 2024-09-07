import { describe, it, expect } from "vitest";
import { ProductUseCase } from "./product-use-cases.js";
import { InMemoryProductRepository } from "@/repositories/in-memory/product-repository.js";


describe('register product use case', () => {
  it('should be able to register', async () => {

    const productRepository = new InMemoryProductRepository()

    const registerUseCase = new ProductUseCase(productRepository)

    const { product } = await registerUseCase.create({
      cost: 11.00,
      description: 'description',
      title: 'camiseta M',
      url_img: 'https://test.dev/',
      amount: 1,
    })    

    expect(product.id).toEqual(expect.any(Number))
  })
} )