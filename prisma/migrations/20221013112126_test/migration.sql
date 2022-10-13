/*
  Warnings:

  - You are about to drop the column `isAdming` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'EDITOR', 'ADMIN');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAdming",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'BASIC';
