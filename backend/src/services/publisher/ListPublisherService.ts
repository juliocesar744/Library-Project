import prismaClient from "../../prisma";

class ListPublisherService {
  async execute() {
    const publishers = await prismaClient.publisher.findMany({
      include: { books: true },
    });

    return publishers;
  }
}

export { ListPublisherService };