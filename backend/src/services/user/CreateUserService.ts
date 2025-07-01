import { Role } from "../../enums/role";
import { UserRequest } from "../../models/interfaces/UserRequest";
import prismaClient from "../../prisma";
import { hash } from "bcryptjs"

class CreateUserService {
    async execute({
            username, 
            password,
            role,
            email,
            phone_no,
            address,
        }: UserRequest) {
        if(!username) {
            throw new Error("Insert a Username");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                username: username
            }
        })

        if (userAlreadyExists) {
            throw new Error("Username already exists");
        }

        const lenghtOfHash = 8;
        const passwordHash = await hash(password, lenghtOfHash);

        const user = prismaClient.user.create({
            data: {
                username: username,
                password: passwordHash,
                role: role as Role,
                email: email,
                phone_no: phone_no,
                address: address,
            },
            select: {
                username: true,
            }
        })

        return user;
    }
}

export { CreateUserService }