/*
  Warnings:

  - Added the required column `author` to the `Alugueis` table without a default value. This is not possible if the table is not empty.
  - Made the column `authorId` on table `Alugueis` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alugueis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "author" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL
);
INSERT INTO "new_Alugueis" ("authorId", "content", "id", "published", "title") SELECT "authorId", "content", "id", "published", "title" FROM "Alugueis";
DROP TABLE "Alugueis";
ALTER TABLE "new_Alugueis" RENAME TO "Alugueis";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
