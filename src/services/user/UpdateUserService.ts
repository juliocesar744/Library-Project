import { UserUpdateRequest } from "../../models/interfaces/user/UserRequest";
import prismaClient from "../../prisma";

class UpdateUserService {
    async execute({username, oldUsername}: UserUpdateRequest) {
        if(!username && !oldUsername) {
            throw new Error("Select a username");
        }

        const userExists = await prismaClient.login.findFirst({
            where: {
                username: oldUsername
            }
        })

        if (!userExists) {
            throw new Error("Username not found");
        }

        const user = prismaClient.login.update({
            where: {
                username: oldUsername
            },
            data: {
                username: username
            }
        })

        return user;
    }
}

export { UpdateUserService }