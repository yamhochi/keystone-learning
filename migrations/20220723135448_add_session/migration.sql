/*
  Warnings:

  - A unique constraint covering the columns `[session]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "session" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_session_key" ON "Attendance"("session");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_session_fkey" FOREIGN KEY ("session") REFERENCES "Social"("id") ON DELETE SET NULL ON UPDATE CASCADE;
