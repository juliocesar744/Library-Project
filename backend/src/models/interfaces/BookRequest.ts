export interface BookCreateRequest {
  title: string;
  category: string;
  price: number;
  edition: string;
  yearofpublication: number;
  publisher_id: number;
}

export interface BookIdentifier {
  book_no: number;
}

export interface BookUpdateRequest {
  book_no: number;
  title?: string;
  category?: string;
  price?: number;
  edition?: string;
  yearofpublication?: number;
  publisher_id?: number;
}