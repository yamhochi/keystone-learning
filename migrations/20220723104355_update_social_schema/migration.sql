/*
  Warnings:

  - You are about to drop the column `attendees` on the `Social` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Social" DROP CONSTRAINT "Social_attendees_fkey";

-- DropIndex
DROP INDEX "Social_attendees_idx";

-- AlterTable
ALTER TABLE "Social" DROP COLUMN "attendees";

-- CreateTable
CREATE TABLE "_Social_attendees" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Social_attendees_AB_unique" ON "_Social_attendees"("A", "B");

-- CreateIndex
CREATE INDEX "_Social_attendees_B_index" ON "_Social_attendees"("B");

-- AddForeignKey
ALTER TABLE "_Social_attendees" ADD CONSTRAINT "_Social_attendees_A_fkey" FOREIGN KEY ("A") REFERENCES "Social"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Social_attendees" ADD CONSTRAINT "_Social_attendees_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
