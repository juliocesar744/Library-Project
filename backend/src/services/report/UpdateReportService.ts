import prismaClient from "../../prisma";
import { ReportUpdateRequest } from "../../models/interfaces/ReportResquest";

class UpdateReportService {
    async execute({
            reg_no,
            user_id, 
            book_no,
            returnDate,
        }: ReportUpdateRequest) {
            
        const reportExists = await prismaClient.reports.findFirst({
            where: {
                reg_no: reg_no
            }
        })

        if (!reportExists) {
            throw new Error("Empréstimo não encontrado");
        }

        const report = prismaClient.reports.update({
            where: {
                reg_no: reg_no
            },
            data: {
                reg_no: reg_no ?? reportExists.reg_no,
                user_id: user_id ?? reportExists.user_id, 
                book_no: book_no ?? reportExists.book_no,
                returnDate: returnDate ?? reportExists.returnDate,
            }
        })

        return report;
    }
}

export { UpdateReportService }