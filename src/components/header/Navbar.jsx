import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function NavBar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="navbar bg-base-200 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <Link to="/category/microsoft">Microsoft</Link>
            </li>
            <li>
              <Link to="/category/nintendo">Nintendo</Link>
            </li>
            <li>
              <Link to="/category/sony">Sony</Link>
            </li>
            <li>
              <Link to="/category/sega">Sega</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Manu Store
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/category/microsoft">Microsoft</Link>
          </li>
          <li>
            <Link to="/category/nintendo">Nintendo</Link>
          </li>
          <li>
            <Link to="/category/sony">Sony</Link>
          </li>
          <li>
            <Link to="/category/sega">Sega</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/cart">
          {totalItems ? <CartWidget itemsOnCart={totalItems} /> : null}
        </Link>
      </div>
    </div>
  );
}
