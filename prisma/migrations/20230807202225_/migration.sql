/*
  Warnings:

  - You are about to drop the column `companyId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Social` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_socialId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_companyId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "companyId";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "companyId",
DROP COLUMN "image";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "Social";
