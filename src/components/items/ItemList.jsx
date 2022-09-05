import React, { useEffect, useState } from "react";
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
