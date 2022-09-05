import React from "react";

export default function ItemDetail({ product }) {
  return (
    <div>
      <div className="card w-96 bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={product.image} alt={product.title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
