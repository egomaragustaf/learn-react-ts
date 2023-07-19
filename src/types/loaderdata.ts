import { Product } from "./product";

export type LoaderData = {
    query: string;
    products: Product[];
    count: number;
  }