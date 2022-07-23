-- CreateTable
CREATE TABLE "Payment" (
    "id" UUID NOT NULL,
    "payer" UUID,
    "payment_date" TIMESTAMP(3),

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Payment_payer_idx" ON "Payment"("payer");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_payer_fkey" FOREIGN KEY ("payer") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
