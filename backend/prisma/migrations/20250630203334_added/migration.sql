/*
  Warnings:

  - You are about to drop the `logins` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `staffs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `staffs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `staffs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STAFF', 'USER');

-- AlterTable
ALTER TABLE "staffs" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL;

-- DropTable
DROP TABLE "logins";

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);
