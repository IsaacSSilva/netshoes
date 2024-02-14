/*
  Warnings:

  - You are about to drop the `AdditionalInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AdditionalInfo" DROP CONSTRAINT "AdditionalInfo_usersId_fkey";

-- DropTable
DROP TABLE "AdditionalInfo";

-- CreateTable
CREATE TABLE "Addressee" (
    "id" TEXT NOT NULL,
    "usersId" TEXT NOT NULL,
    "addressee" TEXT NOT NULL,
    "street_address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,

    CONSTRAINT "Addressee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Addressee" ADD CONSTRAINT "Addressee_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
