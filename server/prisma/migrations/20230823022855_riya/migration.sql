/*
  Warnings:

  - Added the required column `id` to the `Signup` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "login" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Signup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" INTEGER NOT NULL
);
INSERT INTO "new_Signup" ("email", "name", "password") SELECT "email", "name", "password" FROM "Signup";
DROP TABLE "Signup";
ALTER TABLE "new_Signup" RENAME TO "Signup";
CREATE UNIQUE INDEX "Signup_name_key" ON "Signup"("name");
CREATE UNIQUE INDEX "Signup_email_key" ON "Signup"("email");
CREATE UNIQUE INDEX "Signup_password_key" ON "Signup"("password");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "login_email_key" ON "login"("email");

-- CreateIndex
CREATE UNIQUE INDEX "login_password_key" ON "login"("password");
