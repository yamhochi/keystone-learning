/*
  Warnings:

  - You are about to drop the column `socials` on the `Payment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_socials_fkey";

-- DropIndex
DROP INDEX "Payment_socials_idx";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "socials";
