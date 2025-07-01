import { Request, Response} from "express"
import { ListBookService } from "../../services/book/ListBookService";

class ListBookController {
    async handle(request: Request, response: Response) {
        const listBooks = new ListBookService();
        const books = await listBooks.execute();

        return response.json(books);
    }
}

export { ListBookController }