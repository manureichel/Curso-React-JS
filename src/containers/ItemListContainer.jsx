import React, { useState } from "react";
import { useEffect } from "react";
// import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import ItemList from "../components/items/ItemList";
import Loader from "../components/info/Loader";

export default function ItemListContainer({ greetings }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setFilteredProducts(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (params?.categoryId) {
      const filtered = products.filter(
        (producto) => producto.category === params.categoryId
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [params, products]);

  return (
    <div className="flex flex-wrap justify-center bg-base-200 p-10 my-5 rounded-md">
      {!loading ? <ItemList products={filteredProducts} /> : <Loader />}
    </div>
  );
}
