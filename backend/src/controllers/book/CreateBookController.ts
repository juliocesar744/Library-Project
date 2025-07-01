import { Request, Response} from "express"
import { CreateBookService } from "../../services/book/CreateBookService";
import { BookCreateRequest } from "../../models/interfaces/BookRequest";

class CreateBookController {
    async handle(request: Request, response: Response) {
        const { 
            title, 
            category,
            price,
            edition,
            yearofpublication,
            publisher_id,

        }: BookCreateRequest = request.body;

        const createBookService = new CreateBookService();
        const newBook = await createBookService.execute({
            title, 
            category,
            price,
            edition,
            yearofpublication,
            publisher_id,
        });

        return response.json(newBook);
    }
}

export { CreateBookController }