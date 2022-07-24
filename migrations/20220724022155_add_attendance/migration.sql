-- CreateTable
CREATE TABLE "Social" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "date" TIMESTAMP(3),

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" UUID NOT NULL,
    "player" UUID,
    "session" UUID,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_player_key" ON "Attendance"("player");

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_session_key" ON "Attendance"("session");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_player_fkey" FOREIGN KEY ("player") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_session_fkey" FOREIGN KEY ("session") REFERENCES "Social"("id") ON DELETE SET NULL ON UPDATE CASCADE;
