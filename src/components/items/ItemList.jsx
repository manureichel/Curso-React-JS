import React from "react";
import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <>
      {products.map((product) => {
        return <Item key={product.id} product={product} />;
      })}
    </>
  );
}
