-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "player" UUID;

-- CreateIndex
CREATE INDEX "Attendance_player_idx" ON "Attendance"("player");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_player_fkey" FOREIGN KEY ("player") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
