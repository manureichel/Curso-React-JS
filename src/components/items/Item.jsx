import React from "react";

export default function Item({ product }) {
  return (
    <div className="card card-compact w-72 mx-5 bg-base-100 shadow-xl my-5">
      <figure>
        <img
          className="max-h-48 w-full object-cover"
          src={product.image}
          alt={"Image: " + product.title}
        />
      </figure>
      <div className="card-body flex justify-between">
        <h2 className="card-title justify start">{product.title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ver Detalles</button>
        </div>
      </div>
    </div>
  );
}
