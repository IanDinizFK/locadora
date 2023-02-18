/*
  Warnings:

  - The primary key for the `Clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "profession" TEXT NOT NULL
);
INSERT INTO "new_Clientes" ("address", "city", "cpf", "email", "id", "name", "profession", "rg", "tel") SELECT "address", "city", "cpf", "email", "id", "name", "profession", "rg", "tel" FROM "Clientes";
DROP TABLE "Clientes";
ALTER TABLE "new_Clientes" RENAME TO "Clientes";
CREATE UNIQUE INDEX "Clientes_email_key" ON "Clientes"("email");
CREATE UNIQUE INDEX "Clientes_rg_key" ON "Clientes"("rg");
CREATE UNIQUE INDEX "Clientes_cpf_key" ON "Clientes"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
