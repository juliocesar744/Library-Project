import { Request, Response} from "express"
import { UserDeleteRequest } from "../../models/interfaces/user/UserRequest";
import { DeleteUserService } from "../../services/user/DeleteUserService";

class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { username }: UserDeleteRequest = request.body;
        const deleteUserService = new DeleteUserService();
        const user = await deleteUserService.execute({
            username: username,
        });

        return response.json(user);
    }
}

export { DeleteUserController }