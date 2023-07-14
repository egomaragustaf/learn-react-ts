import { useEffect, useState } from "react";
import Button from "./Button";

type Product = {
  brand: string;
  image: string;
  title: string;
  price: string;
  id: number;
  category: string;
};

const ShowProducts: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error && products.length === 0) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="dark:text-black text-white">
        <input
          onChange={() => {}}
          type="search"
          name="searchProduct"
          id="searchProduct"
          className="px-2 py-2 mx-2 my-2 rounded"
        />
        <Button>Search</Button>
        <div className="flex flex-row flex-wrap w-full gap-4 font-semibold ">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-60 bg-slate-200 hover:bg-slate-300 rounded-md shadow mx-2 my-2 flex flex-col justify-between p-4">
              <ul>
                <img
                  src={product.image}
                  className="rounded-t-lg h-40 w-full object-cover"
                />
                <li>Title: {product.title}</li>
                <li>Brand: {product.brand}</li>
                <li>Category: {product.category}</li>
                <li>Price: ${product.price}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ShowProducts;
