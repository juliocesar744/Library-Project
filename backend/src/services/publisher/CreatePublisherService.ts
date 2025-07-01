import prismaClient from "../../prisma";
import { PublisherCreateRequest } from "../../models/interfaces/PublisherRequest";

class CreatePublisherService {
  async execute({ name }: PublisherCreateRequest) {
    console.log(name)
    const publisherExists = await prismaClient.publisher.findFirst({
      where: { name },
    });

    if (publisherExists) {
      throw new Error("Editora já registrada.");
    }

    const publisher = await prismaClient.publisher.create({
      data: { name },
    });

    return publisher;
  }
}

export { CreatePublisherService };