import React, { useState } from "react";
import { useEffect } from "react";
// import ItemCount from "./ItemCount";
import ItemList from "../components/items/ItemList";

export default function ItemListContainer({ greetings }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-wrap justify-center bg-base-200 p-10 my-5 rounded-md">
      <ItemList products={products} />
    </div>
  );
}
