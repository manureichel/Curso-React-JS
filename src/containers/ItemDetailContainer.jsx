import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../components/items/ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((response) => setProduct(response))
      .catch((err) => console.error(err));
  }, []);

  console.log(product);

  return (
    <div className="hero mt-5">
      <ItemDetail product={product} />
    </div>
  );
}
