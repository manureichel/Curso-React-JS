import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../components/items/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../components/info/Loader";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [params]);

  return (
    <div className="hero mt-5">
      {!loading ? <ItemDetail product={product} /> : <Loader />}
    </div>
  );
}
