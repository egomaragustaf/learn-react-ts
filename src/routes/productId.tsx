import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { Product } from "../types";
import { Layout } from "../components";

export async function loader({ params }: LoaderFunctionArgs) {
  const productId = params.productId || "";

  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = (await response.json()) as Product;

  return { product };
}

export default function ProductIdRoute() {
  const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!product) {
    return <p>Sorry, no product found.</p>;
  }

  return (
    <Layout>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </Layout>
  );
}
