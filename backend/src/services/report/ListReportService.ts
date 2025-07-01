import prismaClient from "../../prisma";

class ListReportService {
    async execute() {
        const reports = prismaClient.reports.findMany()

        return reports;
    }
}

export { ListReportService }