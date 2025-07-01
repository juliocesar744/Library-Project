import prismaClient from "../../prisma";

class ListUserService {
    async execute() {
        const users = prismaClient.user.findMany()

        return users;
    }
}

export { ListUserService }