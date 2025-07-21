import prismaClient from "../../prisma";

class ListPublisherService {
  async execute() {
    const publishers = await prismaClient.publisher.findMany();

    return publishers;
  }
}

export { ListPublisherService };