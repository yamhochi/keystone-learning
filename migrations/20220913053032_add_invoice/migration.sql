-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "users" UUID;

-- CreateIndex
CREATE INDEX "Invoice_users_idx" ON "Invoice"("users");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_users_fkey" FOREIGN KEY ("users") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
