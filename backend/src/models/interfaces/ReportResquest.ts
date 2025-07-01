export interface ReportRequest {
  user_id: number;
  book_no: number;
  returnDate: Date;
}

export interface ReportIdentifier {
  reg_no: number;
}

export interface ReportUpdateRequest {
  reg_no: number;
  user_id: number;
  book_no: number;
  returnDate: Date;
}

export interface ReportData {
  reg_no: number;
  user_id: number;
  email?: string
  phone_no?: string
  address?: string
  username?: string
  book_no: number;
  title?: string;
  category?: string;
  edition?: string;
  yearofpublication?: number;
  publisher_id?: number;
  returnDate: Date;
  
}