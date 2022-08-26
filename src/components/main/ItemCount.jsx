import React, { useState } from "react";

export default function ItemCount({ stock, initial, onAddToCart }) {
  const [count, setCount] = useState(initial);
  const [disableAdd, setDisableAdd] = useState(initial < stock ? false : true);
  const [disableSub, setDisableSub] = useState(initial > 0 ? false : true);

  const onAdd = () => {
    let newCount = count + 1;
    if (newCount <= stock) {
      setCount(newCount);
      setDisableSub(false);
    }
    if (newCount === stock) {
      setDisableAdd(true);
    }
  };

  const onSub = () => {
    let newCount = count - 1;
    if (newCount <= stock) {
      setCount(newCount);
      setDisableAdd(false);
    }
    if (newCount === 0) {
      setDisableSub(true);
    }
  };

  return (
    <div className="card w-80 bg-base-100 shadow-xl mt-10 flex justify-center">
      <h1 className="text-2xl font-bold mt-2">Producto de Prueba</h1>
      <p className="mt-2">Descripción del producto</p>
      <p className="mt-1 text-xs">Stock: {stock}</p>
      <div className="flex align-center justify-center my-5">
        <button className="btn btn-xs" onClick={onSub} disabled={disableSub}>
          -
        </button>
        <p className="mx-10">{count}</p>
        <button className="btn btn-xs" onClick={onAdd} disabled={disableAdd}>
          +
        </button>
      </div>
      <button
        className="btn w-auto btn-primary mt-5"
        onClick={() => onAddToCart(count)}
      >
        Añadir a Carrito
      </button>
    </div>
  );
}
