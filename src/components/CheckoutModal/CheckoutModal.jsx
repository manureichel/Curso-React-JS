import React, { useContext } from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Loader from "../info/Loader";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const CheckoutModal = () => {
  const { cart, clear } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const items = cart.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    };
  });

  const [checkoutData, setCheckoutData] = useState({
    buyer: {
      name: "",
      lastname: "",
      phone: "",
      mail: "",
      address: "",
    },
    items: [...items],
    total: total,
  });

  const popUpOk = (id) => {
    MySwal.fire("Orden generada", `Código de orden: ${id}`, "success");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("enviando");
    setLoading(true);
    const docRef = await addDoc(collection(db, "orders"), checkoutData);
    if (docRef.id) {
      console.log("Orden creada con ID: ", docRef.id);
      popUpOk(docRef.id);
      setLoading(false);
      clear();
    } else {
      console.log("Error creando la orden");
    }
  };

  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setCheckoutData({
      ...checkoutData,
      buyer: {
        ...checkoutData.buyer,
        [name]: value,
      },
    });
  };

  return (
    <div>
      {!loading ? (
        <div>
          <label htmlFor="my-modal-3" className="btn modal-button">
            Finalizar
          </label>

          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative flex flex-col items-center">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">Checkout</h3>
              <p className="py-4">Ingresá tus datos para el envio.</p>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Nombre</span>
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Ingresá tu nombre completo"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text">Apellido</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  onChange={handleInputChange}
                  placeholder="Ingresá tu apellido"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text">Dirección</span>
                </label>
                <input
                  type="text"
                  name="address"
                  onChange={handleInputChange}
                  placeholder="Ingresá tu direcicón"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text">Teléfono</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  onChange={handleInputChange}
                  placeholder="Ingresá tu número de teléfono"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text">E-mail</span>
                </label>
                <input
                  type="mail"
                  name="mail"
                  onChange={handleInputChange}
                  placeholder="Ingresá tu correo electrónico"
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  className="btn btn-primary mt-5 "
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};
