import React, { useEffect, useState } from "react";
import Item from "./Item";

export default function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const productList = products.map((product) => (
    <Item product={product} key={product.id} />
  ));

  return productList;
}
