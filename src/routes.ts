import {Router, Request, Response } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

const router = Router();
router.get("/test", (request: Request, response: Response) => {
  return response.json({ ok: true});
})

//User Routes
router.post('/userCreate', new CreateUserController().handle);
router.delete('/userDelete', new DeleteUserController().handle);
router.post('/userUpdate', new UpdateUserController().handle);

export { router };