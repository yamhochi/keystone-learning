/*
  Warnings:

  - A unique constraint covering the columns `[payer]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Payment_payer_idx";

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "socials" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "Payment_payer_key" ON "Payment"("payer");

-- CreateIndex
CREATE INDEX "Payment_socials_idx" ON "Payment"("socials");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_socials_fkey" FOREIGN KEY ("socials") REFERENCES "Social"("id") ON DELETE SET NULL ON UPDATE CASCADE;
