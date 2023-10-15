/*
  Warnings:

  - You are about to drop the column `blood_group` on the `Seller` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "blood_group",
ADD COLUMN     "login" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "login" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "BlodGroup";
