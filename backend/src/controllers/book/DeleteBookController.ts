import { Request, Response } from "express";
import { DeleteBookService } from "../../services/book/DeleteBookService";

class DeleteBookController {
  async handle(request: Request, response: Response) {
    const { book_no } = request.body;

    const deleteBook = new DeleteBookService();
    const deletedBook = await deleteBook.execute({ book_no });

    return response.json(deletedBook);
  }
}

export { DeleteBookController };