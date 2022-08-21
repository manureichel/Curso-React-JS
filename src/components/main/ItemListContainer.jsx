import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="hero min-h-screen bg-base-200 container px-4 my-5">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{greeting}</h1>
          <p className="py-6">
            Bienvenido a la tienda Manu Store. Todavía no sabemos bien que vamos
            a vender pero muy pronto te lo estaremos contando. Mientras tanto,
            te dejamos con este botón que por el momento no hace nada:
          </p>
          <button className="btn btn-primary">Botón :)</button>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
