/*
  Warnings:

  - A unique constraint covering the columns `[didpay]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "didpay" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_didpay_key" ON "Attendance"("didpay");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_didpay_fkey" FOREIGN KEY ("didpay") REFERENCES "Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
