import { Category } from "@prisma/client";
import { BookUpdateRequest } from "../../models/interfaces/BookRequest";
import prismaClient from "../../prisma";

class UpdateBookService {
    async execute({
            book_no,
            title, 
            category,
            price,
            edition,
            yearofpublication,
            publisher_id,
        }: BookUpdateRequest) {
            
        const bookExists = await prismaClient.book.findFirst({
            where: {
                book_no: book_no
            }
        })

        if (!bookExists) {
            throw new Error("Book not found");
        }

        const book = prismaClient.book.update({
            where: {
                book_no: book_no
            },
            data: {
                title: title ?? bookExists.title, 
                category: category as Category ?? bookExists.category,
                price: price ?? bookExists.price,
                edition: edition ?? bookExists.edition,
                yearofpublication: yearofpublication ?? bookExists.yearofpublication,
                publisher_id: publisher_id ?? bookExists.publisher_id,
            }
        })

        return book;
    }
}

export { UpdateBookService }