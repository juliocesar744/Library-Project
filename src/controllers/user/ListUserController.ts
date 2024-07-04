import { Request, Response} from "express"
import { ListUserService } from "../../services/user/ListUserService";

class ListUserController {
    async handle(request: Request, response: Response) {
        const updateUser = new ListUserService();
        const user = await updateUser.execute();

        return response.json(user);
    }
}

export { ListUserController }