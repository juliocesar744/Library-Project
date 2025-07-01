import { Request, Response } from "express";
import { DeleteReportService } from "../../services/report/DeleteReportService";

class DeleteReportController {
  async handle(request: Request, response: Response) {
    const { reg_no } = request.body;

    const deleteReport = new DeleteReportService();
    const deletedReport = await deleteReport.execute({ reg_no });

    return response.json(deletedReport);
  }
}

export { DeleteReportController };