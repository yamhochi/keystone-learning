/*
  Warnings:

  - A unique constraint covering the columns `[payment]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "payment" UUID;

-- CreateTable
CREATE TABLE "Payment" (
    "id" UUID NOT NULL,
    "amount" INTEGER,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_payment_key" ON "Attendance"("payment");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_payment_fkey" FOREIGN KEY ("payment") REFERENCES "Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
