/*
  Warnings:

  - You are about to drop the `readers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_no` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reports" DROP CONSTRAINT "Reports_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "phone_no" TEXT NOT NULL;

-- DropTable
DROP TABLE "readers";

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "Reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
