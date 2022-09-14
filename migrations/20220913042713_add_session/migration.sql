-- CreateTable
CREATE TABLE "_Session_users" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Session_users_AB_unique" ON "_Session_users"("A", "B");

-- CreateIndex
CREATE INDEX "_Session_users_B_index" ON "_Session_users"("B");

-- AddForeignKey
ALTER TABLE "_Session_users" ADD CONSTRAINT "_Session_users_A_fkey" FOREIGN KEY ("A") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Session_users" ADD CONSTRAINT "_Session_users_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
