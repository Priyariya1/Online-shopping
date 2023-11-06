-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "price" INTEGER NOT NULL DEFAULT 999,
    "image" TEXT NOT NULL DEFAULT 'https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?w=740&t=st=1692523251~exp=1692523851~hmac=71cf78b0a3631ff6b7556a3ffde76fa4fab28ac4ef6eb0db8d422a070fa1107b',
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
