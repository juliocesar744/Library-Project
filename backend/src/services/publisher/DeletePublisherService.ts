import prismaClient from "../../prisma";
import { PublisherIdentifier } from "../../models/interfaces/PublisherRequest";

class DeletePublisherService {
  async execute({ publisher_id }: PublisherIdentifier) {
    if (!publisher_id) throw new Error("Informe o ID da editora.");

    const publisherExists = await prismaClient.publisher.findUnique({
      where: { publisher_id },
    });

    if (!publisherExists) throw new Error("Editora não encontrada.");

    const deleted = await prismaClient.publisher.delete({
      where: { publisher_id },
    });

    return deleted;
  }
}

export { DeletePublisherService };