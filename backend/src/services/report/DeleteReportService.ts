import { PrismaClient } from "@prisma/client";
import { ReportIdentifier } from "../../models/interfaces/ReportResquest";

const prisma = new PrismaClient();

class DeleteReportService {
  async execute({ reg_no }: ReportIdentifier) {
    if (!reg_no) {
      throw new Error("Informe o número do empréstimo");
    }

    const ReportExists = await prisma.reports.findUnique({
      where: {
        reg_no: reg_no,
      },
    });

    if (!ReportExists) {
      throw new Error("Empréstimo não encontrado.");
    }

    const deletedReport = await prisma.reports.delete({
      where: {
        reg_no: reg_no,
      },
    });

    return deletedReport;
  }
}

export { DeleteReportService };