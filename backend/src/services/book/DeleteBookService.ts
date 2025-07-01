import { PrismaClient } from "@prisma/client";
import { BookIdentifier } from "../../models/interfaces/BookRequest";

const prisma = new PrismaClient();

class DeleteBookService {
  async execute({ book_no }: BookIdentifier) {
    if (!book_no) {
      throw new Error("Informe o número do livro (book_no).");
    }

    const bookExists = await prisma.book.findUnique({
      where: {
        book_no: book_no,
      },
    });

    if (!bookExists) {
      throw new Error("Livro não encontrado.");
    }

    const deletedBook = await prisma.book.delete({
      where: {
        book_no: book_no,
      },
    });

    return deletedBook;
  }
}

export { DeleteBookService };