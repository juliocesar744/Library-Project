import prismaClient from "../../prisma";
import { BookCreateRequest } from "../../models/interfaces/BookRequest";
import { Category } from "../../enums/category";

class CreateBookService {
    async execute({
        title, 
        category,
        price,
        edition,
        yearofpublication,
        publisher_id,
    }: BookCreateRequest) {
        const bookAlreadyExists = await prismaClient.book.findFirst({
            where: {
                title: title,
                category: category as Category,
                edition: edition,
            }
        })

        if (bookAlreadyExists) {
            throw new Error("Book already exists");
        }

        const book = await prismaClient.book.create({
            data: {
                title: title,
                category: category as Category,
                price: price,
                edition: edition,
                yearofpublication: yearofpublication,
                publisher_id: publisher_id
            },
            select: {
                title: true,
                category: true,
                price: true,
                edition: true,
                yearofpublication: true,
                publisher: true
            }
        })

        return book;
    }
}

export { CreateBookService }