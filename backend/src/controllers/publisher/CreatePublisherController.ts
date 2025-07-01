import { Request, Response } from "express";
import { CreatePublisherService } from "../../services/publisher/CreatePublisherService";
import { PublisherCreateRequest } from "../../models/interfaces/PublisherRequest";

class CreatePublisherController {
  async handle(request: Request, response: Response) {
    const { name }: PublisherCreateRequest = request.body;

    const service = new CreatePublisherService();
    const publisher = await service.execute({ name });

    return response.json(publisher);
  }
}

export { CreatePublisherController };