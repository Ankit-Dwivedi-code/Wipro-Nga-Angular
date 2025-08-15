export interface Book {
  id: number;
  title: string;
  author?: string;
  price: number;
  publicationDate: string; // ISO date string
  description: string;
  imageUrl?: string;
}
