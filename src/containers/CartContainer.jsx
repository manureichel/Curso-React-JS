import React, { useContext } from "react";
import Cart from "../components/Cart/Cart";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CheckoutModal } from "../components/CheckoutModal/CheckoutModal";

export default function CartContainer() {
  const { cart, clear, removeItem } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="hero flex flex-col justify-center mt-10">
        <h1 className="card-title max-w-md">No hay productos en el carrito</h1>
        <Link to="/">
          <button className="btn mt-5">Ver productos</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex flex-col hero justify-center mt-10 mb-10 p-10 bg-base-200">
          <h1 className="card-title mb-10">Productos en el Carrito</h1>
          <Cart cart={cart} removeItem={removeItem} key={cart.title} />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-lg">
            Total de la compra: ${total.toFixed(2)}
          </h1>
          <button
            className="btn mx-5"
            onClick={() => {
              clear();
            }}
          >
            Limpiar carrito
          </button>
          <CheckoutModal cart={cart} total={total} />
        </div>
      </div>
    );
  }
}
