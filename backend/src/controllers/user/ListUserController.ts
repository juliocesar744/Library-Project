import { Request, Response} from "express"
import { ListUserService } from "../../services/user/ListUserService";

class ListUserController {
    async handle(request: Request, response: Response) {
        const listUsers = new ListUserService();
        const users = await listUsers.execute();

        return response.json(users);
    }
}

export { ListUserController }