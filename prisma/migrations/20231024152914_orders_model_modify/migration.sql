/*
  Warnings:

  - Added the required column `distict` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sub_distict` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "distict" TEXT NOT NULL,
ADD COLUMN     "sub_distict" TEXT NOT NULL;
