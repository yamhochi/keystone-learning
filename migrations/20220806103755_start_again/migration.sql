/*
  Warnings:

  - You are about to drop the `Attendance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Social` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_payment_fkey";

-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_player_fkey";

-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_session_fkey";

-- DropTable
DROP TABLE "Attendance";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Social";

-- CreateTable
CREATE TABLE "Session" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "date" TIMESTAMP(3),

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Session_users" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Session_users_AB_unique" ON "_Session_users"("A", "B");

-- CreateIndex
CREATE INDEX "_Session_users_B_index" ON "_Session_users"("B");

-- AddForeignKey
ALTER TABLE "_Session_users" ADD CONSTRAINT "_Session_users_A_fkey" FOREIGN KEY ("A") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Session_users" ADD CONSTRAINT "_Session_users_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
