import { Request, Response} from "express"
import { ReportUpdateRequest } from "../../models/interfaces/ReportResquest";
import { UpdateReportService } from "../../services/report/UpdateReportService";

class UpdateReportController {
    async handle(request: Request, response: Response) {
        const { 
            reg_no,
            user_id, 
            book_no,
            returnDate,
        }: ReportUpdateRequest = request.body;

        const updateReport = new UpdateReportService();
        const book = await updateReport.execute({
            reg_no: reg_no,
            user_id: user_id, 
            book_no: book_no,
            returnDate: returnDate,
        });

        return response.json(book);
    }
}

export { UpdateReportController }