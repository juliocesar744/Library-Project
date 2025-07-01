import { Request, Response } from "express";
import { ListPublisherService } from "../../services/publisher/ListPublisherService";

class ListPublisherController {
  async handle(request: Request, response: Response) {
    const service = new ListPublisherService();
    const list = await service.execute();

    return response.json(list);
  }
}

export { ListPublisherController };