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

export type PublishersList = {
    publisher_id: number;
    name: string;
}