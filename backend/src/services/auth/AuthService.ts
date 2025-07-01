import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthService {
  async execute(username: string, password: string) {
    const user = await prismaClient.user.findFirst({
      where: { username }
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Senha incorreta");
    }

    const token = jwt.sign(
      {
        user_id: user.user_id,
        username: user.username,
        role: user.role,
        email: user.email,
        phone_no: user.phone_no,
        address: user.address
      },
      process.env.JWT_SECRET || "defaultsecret",
      {
        expiresIn: "1h"
      }
    );

    return {
      token,
      user: {
        username: user.username,
        role: user.role,
        user_id: user.user_id,
        email: user.email,
        phone_no: user.phone_no,
        address: user.address
      }
    };
  }
}

export { AuthService };
