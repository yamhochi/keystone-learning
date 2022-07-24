-- DropIndex
DROP INDEX "Attendance_session_key";

-- CreateIndex
CREATE INDEX "Attendance_session_idx" ON "Attendance"("session");
