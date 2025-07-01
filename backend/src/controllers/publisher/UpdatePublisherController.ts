import { Request, Response } from "express";
import { UpdatePublisherService } from "../../services/publisher/UpdatePublisherService";
import { PublisherUpdateRequest } from "../../models/interfaces/PublisherRequest";

class UpdatePublisherController {
  async handle(request: Request, response: Response) {
    const { publisher_id, name }: PublisherUpdateRequest = request.body;

    const service = new UpdatePublisherService();
    const updated = await service.execute({
      publisher_id,
      name,
    });

    return response.json(updated);
  }
}

export { UpdatePublisherController };