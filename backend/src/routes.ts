import {Router, Request, Response } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { ListUserController } from "./controllers/user/ListUserController";
import { CreateBookController } from "./controllers/book/CreateBookController";
import { DeleteBookController } from "./controllers/book/DeleteBookController";
import { ListBookController } from "./controllers/book/ListBookController";
import { UpdateBookController } from "./controllers/book/UpdateBookController";

const router = Router();
router.get("/test", (request: Request, response: Response) => {
  return response.json({ ok: true});
})

//User Routes
router.post('/userCreate', new CreateUserController().handle);
router.delete('/userDelete', new DeleteUserController().handle);
router.get('/userList', new ListUserController().handle);
router.post('/userUpdate', new UpdateUserController().handle);

//Book Routes
router.post('/bookCreate', new CreateBookController().handle);
router.delete('/bookDelete', new DeleteBookController().handle);
router.get('/bookList', new ListBookController().handle);
router.post('/bookUpdate', new UpdateBookController().handle);

export { router };