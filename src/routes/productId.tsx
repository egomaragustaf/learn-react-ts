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
      <div className="w-full flex justify-center items-center">
        <ul
          key={product.id}
          className="rounded-md shadow mx-2 my-2 flex p-4 gap-8 text-xl">
          <li className="bg-slate-200 rounded-lg p-4">
            <ul>
              <img
                src={product.thumbnail}
                className="rounded-lg h-60 object-cover w-full"></img>
            </ul>
          </li>
          <li>
            <ul>
              <li className="text-indigo-500">{product.title}</li>
              <li>Brand: {product.brand}</li>
              <li>Category: {product.category}</li>
              <li>Description: {product.description}</li>
              <li>Price: ${product.price}</li>
            </ul>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
