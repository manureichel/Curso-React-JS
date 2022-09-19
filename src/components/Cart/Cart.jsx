import React from "react";
import { FaTrash } from "react-icons/fa";

function CartItem({ item, removeItem }) {
  return (
    <div className="flex justify-between mb-5 items-center">
      <div className="flex items-center">
        <img
          className="w-24 max-h-24 rounded-lg mr-5"
          src={item.image}
          alt={item.title}
        />
        <div>
          <h1 className="card-title w-44">{item.title}</h1>
        </div>
        <div className="ml-36">
          <h5>Cantidad: {item.quantity}</h5>
          <h5>Precio: ${item.price}</h5>
          <h5 className="font-semibold">
            Subtotal: ${item.price * item.quantity}
          </h5>
        </div>
      </div>

      <button onClick={() => removeItem(item.id)} className="btn ml-20">
        <FaTrash />
      </button>
    </div>
  );
}

function Cart({ cart, removeItem }) {
  return (
    <div className="flex flex-col justify-center content-center">
      {cart.map((item) => (
        <CartItem item={item} removeItem={removeItem} key={item.id} />
      ))}
    </div>
  );
}

export default Cart;
