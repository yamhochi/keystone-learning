/*
  Warnings:

  - You are about to drop the column `player` on the `Attendance` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_player_fkey";

-- DropIndex
DROP INDEX "Attendance_player_idx";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "player";
