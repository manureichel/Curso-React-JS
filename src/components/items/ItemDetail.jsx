import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({ product }) {
  const stock = 53;

  const [quantity, setQuantity] = React.useState(0);

  const navigate = useNavigate();

  const handleAddToCart = (quantity) => {
    setQuantity(quantity);
  };

  const handleFinish = () => {
    navigate("/cart");
  };

  return (
    <div className="flex items-center card w-96 bg-base-200 shadow-xl">
      <div className="">
        <figure className="px-10 pt-10">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl max-h-72"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.title}</h2>
          <p className="text-justify">{product.description}</p>
          <p>${product.price}</p>
        </div>
      </div>

      <div className="">
        {!quantity ? (
          <ItemCount
            stock={stock}
            initial={quantity}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <button
            className="btn btn-primary mb-3"
            onClick={() => handleFinish()}
          >
            Terminar Compra
          </button>
        )}
      </div>
    </div>
  );
}
