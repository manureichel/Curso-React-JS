import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../components/items/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../components/info/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "products", params.productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLoading(false);
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No encontrado");
          // Acá podríamos navegar a un msj de error
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [params]);

  return (
    <div className="hero mt-5">
      {!loading ? <ItemDetail product={product} /> : <Loader />}
    </div>
  );
}
