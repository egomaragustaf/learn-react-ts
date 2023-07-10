import { useState } from "react";

import Button from "./Button";
import FormProduct from "./FormProduct";
import productsJSON from "../data/products.json";

export default function Products() {
  const [dataProducts, setDataProducts] = useState(productsJSON);

  function addNewProduct() {
    setDataProducts([
      ...dataProducts,
      { id: 4, name: "School Sneaker 200", color: "Yellow", price: 400000 },
    ]);
  }

  return (
    <ul>
      <FormProduct />
      <Button onClick={addNewProduct}>Add New Product</Button>

      {dataProducts.map((product) => {
        return <li key={product.id}>{product.name}</li>;
      })}
    </ul>
  );
}
