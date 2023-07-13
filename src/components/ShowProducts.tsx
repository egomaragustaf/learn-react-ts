import { useEffect, useState } from "react";

type Product = {
  name: string;
  image: string;
  title: string;
  description: string;
  price: string;
  id: number;
};

const ShowProducts: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result.products);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex flex-col gap-4 max-w-sm">
        {products.map((product) => (
          <ul key={product.id}>
            <li>{product.name}</li>
            <li>{product.image}</li>
            <li>{product.title}</li>
            <li>{product.description}</li>
            <li>{product.price}</li>
            <li>{product.id}</li>
          </ul>
        ))}
      </div>
    );
  }
};

export default ShowProducts;
