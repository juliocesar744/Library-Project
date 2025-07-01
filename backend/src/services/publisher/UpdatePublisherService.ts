import prismaClient from "../../prisma";
import { PublisherUpdateRequest } from "../../models/interfaces/PublisherRequest";

class UpdatePublisherService {
  async execute({ publisher_id, name }: PublisherUpdateRequest) {
    const publisherExists = await prismaClient.publisher.findUnique({
      where: { publisher_id },
    });

    if (!publisherExists) throw new Error("Editora não encontrada.");

    const updated = await prismaClient.publisher.update({
      where: { publisher_id },
      data: {
        name: name ?? publisherExists.name,
      },
    });

    return updated;
  }
}

export { UpdatePublisherService };