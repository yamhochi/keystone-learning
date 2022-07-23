-- DropIndex
DROP INDEX "Payment_payer_key";

-- CreateIndex
CREATE INDEX "Payment_payer_idx" ON "Payment"("payer");
