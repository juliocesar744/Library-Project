export interface PublisherCreateRequest {
  name: string;
}

export interface PublisherUpdateRequest {
  publisher_id: number;
  name?: string;
}

export interface PublisherIdentifier {
  publisher_id: number;
}
