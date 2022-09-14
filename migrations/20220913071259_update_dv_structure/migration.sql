/*
  Warnings:

  - You are about to drop the `_Session_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Session_users" DROP CONSTRAINT "_Session_users_A_fkey";

-- DropForeignKey
ALTER TABLE "_Session_users" DROP CONSTRAINT "_Session_users_B_fkey";

-- DropTable
DROP TABLE "_Session_users";
