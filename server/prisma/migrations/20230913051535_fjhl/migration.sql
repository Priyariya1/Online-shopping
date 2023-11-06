/*
  Warnings:

  - You are about to drop the `login` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "login";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Login" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Login_email_key" ON "Login"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Login_password_key" ON "Login"("password");
