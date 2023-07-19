import { Product } from ".";

export type LoaderData = {
    query: string;
    products: Product[];
    count: number;
  }