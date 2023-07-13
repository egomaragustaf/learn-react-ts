import { useEffect, useState } from "react";

type Product = {
  brand: string;
  thumbnail: string;
  title: string;
  description: string;
  price: string;
  id: number;
  category: string;
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
            <li>{product.thumbnail}</li>
            <li>Title: {product.title}</li>
            <li>Description: {product.description}</li>
            <li>Brand: {product.brand}</li>
            <li>Category: {product.category}</li>
            <li>Price: ${product.price}</li>
          </ul>
        ))}
      </div>
    );
  }
};

export default ShowProducts;
