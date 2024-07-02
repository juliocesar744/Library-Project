import { Request, Response} from "express"
import { UserRequest } from "../../models/interfaces/user/UserRequest";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { username, password }: UserRequest = request.body;
        console.log(request.body)
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            username: username,
            password: password
        });

        return response.json(user);
    }
}

export { CreateUserController }