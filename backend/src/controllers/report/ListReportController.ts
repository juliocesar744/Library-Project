import { Request, Response} from "express"
import { ListReportService } from "../../services/report/ListReportService";

class ListReportController {
    async handle(request: Request, response: Response) {
        const listReports = new ListReportService();
        const reports = await listReports.execute();

        return response.json(reports);
    }
}

export { ListReportController }