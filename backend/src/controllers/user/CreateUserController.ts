import { Request, Response} from "express"
import { UserRequest } from "../../models/interfaces/UserRequest";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { 
            username, 
            password,
            role,
            email,
            phone_no,
            address,
        }: UserRequest = request.body;

        const createUserService = new CreateUserService();
        const newUser = await createUserService.execute({
            username,
            password,
            role,
            email,
            phone_no,
            address,
        });

        return response.json(newUser);
    }
}

export { CreateUserController }