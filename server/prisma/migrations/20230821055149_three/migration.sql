-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
