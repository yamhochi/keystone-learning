-- CreateTable
CREATE TABLE "Social" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "date" TIMESTAMP(3),
    "attendees" UUID,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Social_attendees_idx" ON "Social"("attendees");

-- AddForeignKey
ALTER TABLE "Social" ADD CONSTRAINT "Social_attendees_fkey" FOREIGN KEY ("attendees") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
