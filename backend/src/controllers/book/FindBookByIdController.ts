import { Request, Response} from "express"
import { BookIdentifier } from "../../models/interfaces/BookRequest";
import { FindBookByIdService } from "../../services/book/FindBookById";

class FindBookByIdController {
    async handle(request: Request, response: Response) {
        const { 
            book_no,
        }: BookIdentifier = request.body;

        const findBook = new FindBookByIdService();
        const book = await findBook.execute({
            book_no: book_no,
        });

        return response.json(book);
    }
}

export { FindBookByIdController }