/*
  Warnings:

  - You are about to drop the `Login` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Signup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `f_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `l_name` on the `User` table. All the data in the column will be lost.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Login_password_key";

-- DropIndex
DROP INDEX "Login_email_key";

-- DropIndex
DROP INDEX "Signup_password_key";

-- DropIndex
DROP INDEX "Signup_email_key";

-- DropIndex
DROP INDEX "Signup_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Login";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Signup";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "p_number" INTEGER NOT NULL
);
INSERT INTO "new_User" ("address", "id", "p_number", "password", "username") SELECT "address", "id", "p_number", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
