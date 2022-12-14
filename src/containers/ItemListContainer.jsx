import React, { useState } from "react";
import { useEffect } from "react";
// import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import ItemList from "../components/items/ItemList";
import Loader from "../components/info/Loader";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function ItemListContainer({ greetings }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(productsList);
      setLoading(false);
    };
    getProducts();
  }, []);

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const filtered = [];
        const productsCollection = collection(db, "products");
        const q = query(
          productsCollection,
          where("category", "==", params.categoryId)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          filtered.push({ id: doc.id, ...doc.data() });
        });
        setLoading(false);
        setFilteredProducts(filtered);
      } catch (error) {
        console.error(error);
      }
    }

    if (params?.categoryId) {
      fetchData();
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
