/*
  Warnings:

  - You are about to drop the column `player` on the `Attendance` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_player_fkey";

-- DropIndex
DROP INDEX "Attendance_player_key";

-- DropIndex
DROP INDEX "Attendance_session_key";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "player";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "attendances" UUID;

-- CreateIndex
CREATE INDEX "Attendance_session_idx" ON "Attendance"("session");

-- CreateIndex
CREATE INDEX "User_attendances_idx" ON "User"("attendances");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_attendances_fkey" FOREIGN KEY ("attendances") REFERENCES "Attendance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
