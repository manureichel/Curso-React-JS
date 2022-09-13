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
    <div className="flex flex-col items-center">
      <p className="text-xs">Stock: {stock}</p>
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
        className="btn w-auto btn-primary mb-3"
        onClick={() => (count ? onAddToCart(count) : null)}
      >
        Añadir a Carrito
      </button>
    </div>
  );
}
