import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../components/items/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => response.json())
      .then((response) => setProduct(response))
      .catch((err) => console.error(err));
  }, [params]);

  return (
    <div className="hero mt-5">
      <ItemDetail product={product} />
    </div>
  );
}
