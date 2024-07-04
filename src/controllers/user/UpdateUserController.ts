import { Request, Response} from "express"
import { UserUpdateRequest } from "../../models/interfaces/user/UserRequest";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { username, oldUsername }: UserUpdateRequest = request.body;
        const updateUser = new UpdateUserService();
        const user = await updateUser.execute({
            username: username,
            oldUsername: oldUsername,
        });

        return response.json(user);
    }
}

export { UpdateUserController }