import {Router, Request, Response } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { ListUserController } from "./controllers/user/ListUserController";
import { CreateBookController } from "./controllers/book/CreateBookController";
import { DeleteBookController } from "./controllers/book/DeleteBookController";
import { ListBookController } from "./controllers/book/ListBookController";
import { UpdateBookController } from "./controllers/book/UpdateBookController";
import { CreatePublisherController } from "./controllers/publisher/CreatePublisherController";
import { DeletePublisherController } from "./controllers/publisher/DeletePublisherController";
import { ListPublisherController } from "./controllers/publisher/ListPublisherController";
import { UpdatePublisherController } from "./controllers/publisher/UpdatePublisherController";
import { CreateReportController } from "./controllers/report/CreateReportController";
import { DeleteReportController } from "./controllers/report/DeleteReportController";
import { UpdateReportController } from "./controllers/report/UpdateReportController";
import { ListReportController } from "./controllers/report/ListReportController";

const router = Router();

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

//Publisher Routes
router.post('/publisherCreate', new CreatePublisherController().handle);
router.delete('/publisherDelete', new DeletePublisherController().handle);
router.get('/publisherList', new ListPublisherController().handle);
router.post('/publisherUpdate', new UpdatePublisherController().handle);

//Report Routes
router.post('/reportCreate', new CreateReportController().handle);
router.delete('/reportDelete', new DeleteReportController().handle);
router.get('/reportList', new ListReportController().handle);
router.post('/reportUpdate', new UpdateReportController().handle);

export { router };