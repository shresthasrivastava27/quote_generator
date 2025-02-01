export interface Quote {
  id: number;
  quote: string;
  author: string;
}

export interface PaginatedQuotes {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}