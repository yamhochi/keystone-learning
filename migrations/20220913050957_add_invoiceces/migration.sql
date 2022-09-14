-- CreateTable
CREATE TABLE "Invoice" (
    "id" UUID NOT NULL,
    "sessions" UUID,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Invoice_sessions_idx" ON "Invoice"("sessions");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_sessions_fkey" FOREIGN KEY ("sessions") REFERENCES "Session"("id") ON DELETE SET NULL ON UPDATE CASCADE;
