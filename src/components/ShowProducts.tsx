import { useEffect, useState } from "react";

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
      <div className="flex flex-row flex-wrap w-3/4 gap-4 font-semibold dark:text-black text-white">
        {products.map((product) => (
          <div className="w-60 bg-slate-200 hover:bg-slate-300 rounded-md shadow mx-2 my-2 flex flex-col justify-between p-4">
            <ul key={product.id}>
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
    );
  }
};

export default ShowProducts;
