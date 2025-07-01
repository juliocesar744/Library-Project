import { Request, Response } from "express";
import { DeletePublisherService } from "../../services/publisher/DeletePublisherService";

class DeletePublisherController {
  async handle(request: Request, response: Response) {
    const { publisher_id } = request.body;

    const service = new DeletePublisherService();
    const result = await service.execute({ publisher_id });

    return response.json(result);
  }
}

export { DeletePublisherController };