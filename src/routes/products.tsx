import { Link, useLoaderData } from "react-router-dom";

import { Layout, SearchFormProduct } from "../components";
import { Product } from "../types";

export async function loader() {
  const response = await fetch("https://dummyjson.com/products");
  const result = (await response.json()) as { products: Product[] };
  const products = result.products;

  return { products };
}

export default function ProductsRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (products.length <= 0) {
    return <p>Sorry, no products yet</p>;
  }

  return (
    <Layout>
      <div className="text-black flex flex-col gap-8">
        <SearchFormProduct />
        <ul className="flex flex-row flex-wrap w-full justify-center items-start gap-4 font-semibold text-black">
          {products.map((product) => (
            <li key={product.id}>
              <Link
                to={`/products/${product.id}`}
                className="w-60 bg-slate-200 hover:bg-slate-300 rounded-md shadow mx-2 my-2 flex flex-col justify-between p-4">
                <ul>
                  <img
                    src={product.thumbnail}
                    className="rounded-t-lg h-40 w-full object-cover"></img>
                  <li className="line-clamp-1">Title: {product.title}</li>
                  <li className="line-clamp-1">Brand: {product.brand}</li>
                  <li className="line-clamp-1">Category: {product.category}</li>
                  <li className="line-clamp-3">
                    Description: {product.description}
                  </li>
                  <li>Price: ${product.price}</li>
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
