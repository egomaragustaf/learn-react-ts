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
          className="rounded-md shadow flex justify-center items-start max-w-4xl p-4 gap-8 text-xl">
          <li className="bg-slate-200 rounded-lg p-2 w-80">
            <ul>
              <img
                src={product.thumbnail}
                className="rounded-lg shadow-lg h-60 object-cover w-full"></img>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col">
              <li className="text-indigo-500 text-4xl">{product.title}</li>
              <li className="text-3xl font-bold mb-4">
                Price: ${product.price}
              </li>
              <div className="flex gap-4 mb-4 text-slate-400">
                <li>Brand: {product.brand} |</li>
                <li>Category: {product.category} |</li>
                <li>Rating: {product.rating}</li>
              </div>
              <li className="mb-4">{product.description}</li>
              <div className="flex gap-8">
                <button
                  className="flex-none w-1/3 h-12 font-normal tracking-wider bg-indigo-500 hover:bg-indigo-600 text-white"
                  type="submit">
                  BUY NOW
                </button>
                <button
                  className="flex-none w-1/3 h-12 font-normal tracking-wider border bg-neutral-900 hover:bg-black border-indigo-500 text-white"
                  type="button">
                  ADD TO BAG
                </button>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
