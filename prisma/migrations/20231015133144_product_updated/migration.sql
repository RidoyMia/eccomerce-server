/*
  Warnings:

  - You are about to drop the column `authorId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `SellerId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_authorId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "authorId",
ADD COLUMN     "SellerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_SellerId_fkey" FOREIGN KEY ("SellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
