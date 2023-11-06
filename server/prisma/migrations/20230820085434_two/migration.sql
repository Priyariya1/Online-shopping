/*
  Warnings:

  - You are about to drop the column `orderId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cartId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" INTEGER NOT NULL,
    "f_name" TEXT NOT NULL,
    "l_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "p_number" INTEGER NOT NULL
);
INSERT INTO "new_User" ("address", "f_name", "id", "l_name", "p_number", "password", "username") SELECT "address", "f_name", "id", "l_name", "p_number", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "price" INTEGER NOT NULL DEFAULT 999,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categoryId", "createdAt", "id", "name", "price", "quantity") SELECT "categoryId", "createdAt", "id", "name", "price", "quantity" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
