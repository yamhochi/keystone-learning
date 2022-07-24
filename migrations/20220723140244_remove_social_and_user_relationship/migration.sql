/*
  Warnings:

  - You are about to drop the `_Social_attendees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Social_attendees" DROP CONSTRAINT "_Social_attendees_A_fkey";

-- DropForeignKey
ALTER TABLE "_Social_attendees" DROP CONSTRAINT "_Social_attendees_B_fkey";

-- DropTable
DROP TABLE "_Social_attendees";
