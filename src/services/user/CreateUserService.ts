import { UserRequest } from "../../models/interfaces/user/UserRequest";
import prismaClient from "../../prisma";
import { hash } from "bcryptjs"

class CreateUserService {
    async execute({username, password}: UserRequest) {
        if(!username) {
            throw new Error("Insert a Username");
        }

        const userAlreadyExists = await prismaClient.login.findFirst({
            where: {
                username: username
            }
        })

        if (userAlreadyExists) {
            throw new Error("Username already exists");
        }

        const lenghtOfHash = 8;
        const passwordHash = await hash(password, lenghtOfHash);

        const user = prismaClient.login.create({
            data: {
                username: username,
                password: passwordHash
            },
            select: {
                username: true,
            }
        })

        return user;
    }
}

export { CreateUserService }