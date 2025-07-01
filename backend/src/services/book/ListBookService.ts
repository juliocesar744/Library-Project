import prismaClient from "../../prisma";

class ListBookService {
    async execute() {
        const books = prismaClient.book.findMany()

        return books;
    }
}

export { ListBookService }