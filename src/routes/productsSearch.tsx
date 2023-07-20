import { LoaderFunctionArgs, json, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

import { LoaderData, Product } from "../types";
import { Layout, SearchFormProduct } from "../components";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";

  if (!query) {
    return JSON.stringify({ query, count: 0, products: [] });
  }

  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`
  );
  const result = (await response.json()) as { products: Product[] };
  const products = result.products;

  const productsCount = products.length;
  const count = productsCount;

  return json({ query, count, products });
}

export default function ProductsSearchRoute() {
  const loaderData = useLoaderData() as LoaderData;
  const { query, products, count } = loaderData;

  return (
    <Layout>
      <div className="text-black flex flex-col gap-8">
        <SearchFormProduct />

        {count <= 0 && query && (
          <section className="dark:text-white text-black text-4xl flex flex-row flex-wrap w-full justify-center items-center">
            <p>No result found for keyword "{query}"</p>
          </section>
        )}
        {products.length > 0 && (
          <section>
            <ul className="flex flex-row flex-wrap w-full justify-center items-start gap-4 font-semibold">
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
                      <li className="line-clamp-1">
                        Category: {product.category}
                      </li>
                      <li className="line-clamp-3">
                        Description: {product.description}
                      </li>
                      <li>Price: ${product.price}</li>
                    </ul>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </Layout>
  );
}
