import { Request, Response} from "express"
import { UserUpdateRequest } from "../../models/interfaces/UserRequest";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { 
            user_id,
            username,
            password,
            role,
            email,
        }: UserUpdateRequest = request.body;
        const updateUser = new UpdateUserService();
        const user = await updateUser.execute({
            username,
            user_id,
            password,
            role,
            email,
        });

        return response.json(user);
    }
}

export { UpdateUserController }