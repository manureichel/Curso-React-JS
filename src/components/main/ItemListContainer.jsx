import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  const handleAdd = (count) => {
    console.log(`Se agregaron ${count} productos al carrito.`);
  };

  return (
    <div className="hero min-h-screen bg-base-200 container px-4 my-5">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{greeting}</h1>
          <ItemCount stock={8} initial={1} onAddToCart={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
