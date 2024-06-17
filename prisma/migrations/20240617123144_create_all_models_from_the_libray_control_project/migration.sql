-- CreateTable
CREATE TABLE "readers" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_no" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "staffs" (
    "staff_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "books" (
    "book_no" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "edition" TEXT NOT NULL,
    "yearofpublication" INTEGER NOT NULL,
    "publisher_id" INTEGER NOT NULL,
    CONSTRAINT "books_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "publishers" ("publisher_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "publishers" (
    "publisher_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "yearOfPublication" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "logins" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Reports" (
    "reg_no" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "book_no" INTEGER NOT NULL,
    "return" DATETIME NOT NULL,
    CONSTRAINT "Reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "readers" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reports_book_no_fkey" FOREIGN KEY ("book_no") REFERENCES "books" ("book_no") ON DELETE RESTRICT ON UPDATE CASCADE
);
