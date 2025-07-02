import { BookIdentifier } from "../../models/interfaces/BookRequest";
import prismaClient from "../../prisma";

class FindBookByIdService {
    async execute({ book_no }: BookIdentifier) {
        const book = prismaClient.book.findFirst(
            {
                where: {
                    book_no: book_no
                },
                select: {
                    book_no: true,
                    title: true,
                    category: true,
                    price: true,
                    edition: true,
                    yearofpublication: true
                }
            }
        )

        if (!book) {
            throw new Error("Livro não encontrado");
        }

        return book;
    }
}

export { FindBookByIdService }