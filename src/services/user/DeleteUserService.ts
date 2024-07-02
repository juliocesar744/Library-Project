import { UserDeleteRequest } from "../../models/interfaces/user/UserRequest";
import prismaClient from "../../prisma";

class DeleteUserService {
    async execute({username}: UserDeleteRequest) {
        if(!username) {
            throw new Error("Select a username");
        }

        const userExists = await prismaClient.login.findFirst({
            where: {
                username: username
            }
        })

        if (!userExists) {
            throw new Error("Username not found");
        }

        const user = prismaClient.login.delete({
            where: {
                username: username
            }
        })

        return user;
    }
}

export { DeleteUserService }