import { app } from "@/app.js";
import { execSync } from "node:child_process";
import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from "vitest";
import request from 'supertest'

describe('register product E2E', () => {

  beforeAll(async () => {
    await app.ready()
  })
  
  afterAll(async () => {
    await app.close()
  })

  beforeEach(async () => {
    execSync('npx prisma migrate dev') 
  })
  it('should be able to registre from product', async () => { 
    await request(app.server)
    .post('/')
    .send(
      {
        cost: 11.00,
        description: 'description',
        title: 'camiseta M',
        url_img: 'https://test.dev/',
        amount: 1,
      }
    ).expect(201)
  })
})