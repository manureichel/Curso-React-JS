import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartWidget({ itemsOnCart }) {
  return (
    <div>
      <div className="indicator mt-2 mr-4">
        <span className="indicator-item indicator-top badge badge-primary">
          {itemsOnCart}
        </span>
        <button className="btn text-2xl">
          <AiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
}
