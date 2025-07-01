import { Request, Response } from "express";
import { CreateReportService } from "../../services/report/CreateReportService";
import { ReportRequest } from "../../models/interfaces/ReportResquest";

class CreateReportController {
  async handle(request: Request, response: Response) {
    const { user_id, book_no, returnDate }: ReportRequest = request.body;

    const createReportService = new CreateReportService();
    const report = await createReportService.execute({
        user_id,
        book_no,
        returnDate: new Date(returnDate)
    });

    return response.json(report);
  }
}

export { CreateReportController };
