import { LoaderFunctionArgs } from "react-router-dom";
import { Product } from "../types";
import { Layout } from "../components";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );
  const result = (await response.json()) as { products: Product[] };
  const products = result.products;

  console.log(products);
}

export default function ProductsSearchRoute() {
  return <Layout>Test</Layout>;
}
