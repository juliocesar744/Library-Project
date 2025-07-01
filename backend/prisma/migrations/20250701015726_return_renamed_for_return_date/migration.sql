/*
  Warnings:

  - You are about to drop the column `return` on the `Reports` table. All the data in the column will be lost.
  - Added the required column `returnDate` to the `Reports` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reports" DROP COLUMN "return",
ADD COLUMN     "returnDate" TIMESTAMP(3) NOT NULL;
