/*
  Warnings:

  - You are about to drop the column `attendances` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_attendances_fkey";

-- DropIndex
DROP INDEX "User_attendances_idx";

-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "player" UUID;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "attendances";

-- CreateIndex
CREATE INDEX "Attendance_player_idx" ON "Attendance"("player");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_player_fkey" FOREIGN KEY ("player") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
