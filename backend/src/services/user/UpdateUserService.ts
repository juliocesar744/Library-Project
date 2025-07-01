import { UserUpdateRequest } from "../../models/interfaces/UserRequest";
import prismaClient from "../../prisma";

class UpdateUserService {
    async execute({
            user_id,
            username,
            password,
            role,
            email,
            phone_no,
            address,
        }: UserUpdateRequest) {

        const userExists = await prismaClient.user.findFirst({
            where: {
                user_id: user_id
            }
        })

        if (!userExists) {
            throw new Error("User not found");
        }

        const user = prismaClient.user.update({
            where: {
                user_id: user_id
            },
            data: {
                username: username ?? userExists.username,
                password: password ?? userExists.password,
                role: role ?? userExists.role,
                email: email ?? userExists.email,
                phone_no: phone_no ?? userExists.phone_no,
                address: address ?? userExists.address,
            }
        })

        return user;
    }
}

export { UpdateUserService }