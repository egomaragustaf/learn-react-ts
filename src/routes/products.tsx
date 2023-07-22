import { Link, useLoaderData } from "react-router-dom";

import { Layout, SearchFormProduct } from "../components";
import { Product } from "../types";
import { ProductCategory } from "../components/ui/product-category";

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
      <section className="text-black flex w-full flex-col gap-8 text-xs justify-center items-center">
        <SearchFormProduct />
        <ProductCategory />
        <ul className="flex flex-row flex-wrap w-full justify-center items-start font-semibold text-black">
          {products.map((product) => (
            <li key={product.id}>
              <Link
                to={`/products/${product.id}`}
                className="w-52 bg-slate-50 hover:bg-slate-300 rounded-md shadow mx-2 my-2 flex flex-col justify-between p-2">
                <ul>
                  <img
                    src={product.thumbnail}
                    className="rounded-t-lg h-60 w-full object-cover"></img>
                  <li className="line-clamp-1">Title: {product.title}</li>
                  <li className="line-clamp-1 mb-4">Brand: {product.brand}</li>
                  <li className="flex justify-between items-end">
                    <span className="text-base text-indigo-900 font-bold">
                      Price: ${product.price}
                    </span>
                    <span className="text-slate-500">
                      Rating: {product.rating}/5
                    </span>
                  </li>
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
