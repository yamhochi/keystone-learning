-- CreateTable
CREATE TABLE "Attendance" (
    "id" UUID NOT NULL,
    "player" UUID,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_player_key" ON "Attendance"("player");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_player_fkey" FOREIGN KEY ("player") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
