export type User = {
    user_id: number;
    username: string;
    role: string;
}

export type ReportCreate = {
    user_id: number;
    book_no: number;
    returnDate: Date;
}