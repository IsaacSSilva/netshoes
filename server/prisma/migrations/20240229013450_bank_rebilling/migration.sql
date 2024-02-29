/*
  Warnings:

  - You are about to drop the column `price` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `promotion` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `sale` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `sort` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the `Addressee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Promotion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `about` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageURL` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `piece` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Addressee" DROP CONSTRAINT "Addressee_usersId_fkey";

-- DropForeignKey
ALTER TABLE "Promotion" DROP CONSTRAINT "Promotion_itemId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "price",
DROP COLUMN "promotion",
DROP COLUMN "sale",
DROP COLUMN "sort",
ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "imageURL" JSONB NOT NULL,
ADD COLUMN     "piece" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Addressee";

-- DropTable
DROP TABLE "Promotion";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "addressee" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_cpf_key" ON "Client"("email", "cpf");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
