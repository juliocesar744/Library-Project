import { Request, Response} from "express"
import { BookUpdateRequest } from "../../models/interfaces/BookRequest";
import { UpdateBookService } from "../../services/book/UpdateBookService";

class UpdateBookController {
    async handle(request: Request, response: Response) {
        const { 
            book_no,
            title, 
            category,
            price,
            edition,
            yearofpublication,
            publisher_id,
        }: BookUpdateRequest = request.body;

        const updateBook = new UpdateBookService();
        const book = await updateBook.execute({
            book_no: book_no,
            title: title, 
            category: category,
            price: price,
            edition: edition,
            yearofpublication: yearofpublication,
            publisher_id: publisher_id,
        });

        return response.json(book);
    }
}

export { UpdateBookController }