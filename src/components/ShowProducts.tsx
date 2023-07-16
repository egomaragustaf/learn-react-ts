import { useEffect, useState } from "react";

type Product = {
  brand: string;
  thumbnail: string;
  title: string;
  price: string;
  id: number;
  category: string;
  description: string;
};

export default function ShowProducts() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result.products);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [search]);

  function handleChangeSearch(value: string) {
    setSearch(value);
  }

  if (error && products.length === 0) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="dark:text-black text-white">
        <form id="searchForm">
          <label
            htmlFor="searchProduct"
            className="dark:text-white text-black mx-2 my-2">
            Search Product
          </label>
          <input
            value={search}
            onChange={(e) => handleChangeSearch(e.target.value)}
            type="search"
            name="searchProduct"
            id="searchProduct"
            className="px-2 py-2 mx-2 my-2 rounded"
          />
        </form>
        <div className="flex flex-row flex-wrap w-full gap-4 font-semibold ">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-60 bg-slate-200 hover:bg-slate-300 rounded-md shadow mx-2 my-2 flex flex-col justify-between p-4">
              <ul>
                <img
                  src={product.thumbnail}
                  className="rounded-t-lg h-40 w-full object-cover"></img>
                <li>Title: {product.title}</li>
                <li>Brand: {product.brand}</li>
                <li>Category: {product.category}</li>
                <li>Description: {product.description}</li>
                <li>Price: ${product.price}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
