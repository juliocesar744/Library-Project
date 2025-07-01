import { UsernameRequest } from "../../models/interfaces/UserRequest";
import prismaClient from "../../prisma";

class DeleteUserService {
    async execute({ user_id }: UsernameRequest) {
        if(!user_id) {
            throw new Error("Select a username");
        }

        const userExists = await prismaClient.user.findFirst({
            where: {
                user_id: user_id
            }
        })

        if (!userExists) {
            throw new Error("Username not found");
        }

        const user = prismaClient.user.delete({
             where: {
                user_id: user_id,
            },
        });

        return user;
    }
}

export { DeleteUserService }