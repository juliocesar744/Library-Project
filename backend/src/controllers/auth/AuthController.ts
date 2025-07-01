import { Request, Response } from "express";
import { AuthService } from "../../services/auth/AuthService";

class AuthController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const service = new AuthService();
    try {
      const result = await service.execute(username, password);
      return res.json(result);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { AuthController };
