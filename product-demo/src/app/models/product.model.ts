// This model will have interface definitions for the product


export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  inStock: boolean;
}