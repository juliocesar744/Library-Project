import { UserUpdateRequest } from "../../models/interfaces/user/UserRequest";
import prismaClient from "../../prisma";

class ListUserService {
    async execute() {
        const user = prismaClient.login.findMany()

        return user;
    }
}

export { ListUserService }