import { ReportRequest } from "../../models/interfaces/ReportResquest";
import prismaClient from "../../prisma";

class CreateReportService {
  async execute({ user_id, book_no, returnDate }: ReportRequest) {

    const userExists = await prismaClient.user.findUnique({
      where: { user_id }
    });

    if (!userExists) {
      throw new Error("Usuário não encontrado.");
    }

    const bookExists = await prismaClient.book.findUnique({
      where: { book_no }
    });

    if (!bookExists) {
      throw new Error("Livro não encontrado.");
    }

    const report = await prismaClient.reports.create({
      data: {
        user_id,
        book_no,
        returnDate: returnDate
      },
      select: {
        reg_no: true,
        returnDate: true,
        readers: {
          select: {
            username: true
          }
        },
        books: {
          select: {
            title: true
          }
        }
      }
    });

    return report;
  }
}

export { CreateReportService };
