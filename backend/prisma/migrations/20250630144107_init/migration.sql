-- CreateTable
CREATE TABLE "readers" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_no" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "readers_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "staffs" (
    "staff_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "staffs_pkey" PRIMARY KEY ("staff_id")
);

-- CreateTable
CREATE TABLE "books" (
    "book_no" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "edition" TEXT NOT NULL,
    "yearofpublication" INTEGER NOT NULL,
    "publisher_id" INTEGER NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("book_no")
);

-- CreateTable
CREATE TABLE "publishers" (
    "publisher_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "yearOfPublication" INTEGER NOT NULL,

    CONSTRAINT "publishers_pkey" PRIMARY KEY ("publisher_id")
);

-- CreateTable
CREATE TABLE "logins" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "logins_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "Reports" (
    "reg_no" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "book_no" INTEGER NOT NULL,
    "return" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reports_pkey" PRIMARY KEY ("reg_no")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "publishers"("publisher_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "Reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "readers"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reports" ADD CONSTRAINT "Reports_book_no_fkey" FOREIGN KEY ("book_no") REFERENCES "books"("book_no") ON DELETE RESTRICT ON UPDATE CASCADE;
