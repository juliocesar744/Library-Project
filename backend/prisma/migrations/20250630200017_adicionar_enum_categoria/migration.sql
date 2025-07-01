/*
  Warnings:

  - Changed the type of `category` on the `books` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FICCAO', 'NAO_FICCAO', 'FICCAO_CIENTIFICA', 'FANTASIA', 'MISTERIO', 'ROMANCE', 'TERROR', 'BIOGRAFIA', 'HISTORIA', 'INFANTIL');

-- AlterTable
ALTER TABLE "books" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;
