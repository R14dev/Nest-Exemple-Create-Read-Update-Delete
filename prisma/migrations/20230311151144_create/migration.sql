-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "descrisao" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "books_bar_code_key" ON "books"("bar_code");
