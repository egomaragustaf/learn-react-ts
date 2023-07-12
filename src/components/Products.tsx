import { useState } from "react";

import FormProduct from "./FormProduct";
import Button from "./Button";
import productJSON from "../data/products.json";

interface Product {
  id: number;
  name: string;
  color: string;
  price: number;
}

export default function Products() {
  const [dataProducts, setDataProducts] = useState<Product[]>(productJSON);
  const [formData, setFormData] = useState<Product>({
    id: 0,
    name: "",
    color: "",
    price: 0,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function addNewProduct(event: React.FormEvent) {
    event.preventDefault();

    const newProduct: Product = {
      id: dataProducts.length + 1,
      name: formData.name,
      color: formData.color,
      price: formData.price,
    };

    setDataProducts([...dataProducts, newProduct]);

    setFormData({
      id: 0,
      name: "",
      color: "",
      price: 0,
    });

    console.log([...dataProducts, newProduct]);
  }

  return (
    <div>
      <FormProduct
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={addNewProduct}
      />
      <Button onClick={addNewProduct}>Add New Product</Button>
      <Button>
        <a href="/">Back To Home</a>
      </Button>

      {dataProducts.map((product) => (
        <ul key={product.id}>
          <li>{product.name}</li>
          <li>{product.color}</li>
          <li>{product.price}</li>
        </ul>
      ))}
    </div>
  );
}
