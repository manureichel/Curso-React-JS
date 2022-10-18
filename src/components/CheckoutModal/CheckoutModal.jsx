import React, { useContext } from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Loader from "../info/Loader";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as yup from "yup";
import { Formik } from "formik";

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

  const checkoutData = {
    items: [...items],
    total: total,
  };

  const popUpOk = (id) => {
    MySwal.fire("Orden generada", `Código de orden: ${id}`, "success");
  };

  const sendToFirebase = async (values) => {
    setLoading(true);
    const dataToSend = { buyer: { ...values }, ...checkoutData };
    const docRef = await addDoc(collection(db, "orders"), dataToSend);
    if (docRef.id) {
      console.log("Orden creada con ID: ", docRef.id);
      popUpOk(docRef.id);
      setLoading(false);
      clear();
    } else {
      console.log("Error creando la orden");
    }
  };

  const yupSchema = yup
    .object()
    .shape({
      name: yup.string().required("El nombre es obligatorio"),
      lastname: yup.string().required("El apellido es obligatorio"),
      phone: yup.number().required("El teléfono es obligatorio"),
      mail: yup
        .string()
        .email("El mail debe ser válido")
        .required("El mail es obligatorio"),
      address: yup.string().required("La dirección es obligatoria"),
    })
    .required();

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

              <Formik
                initialValues={{
                  name: "",
                  lastname: "",
                  phone: "",
                  mail: "",
                  address: "",
                }}
                onSubmit={(values) => {
                  sendToFirebase(values);
                }}
                validationSchema={yupSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isValid,
                  dirty,
                }) => (
                  <div className="form-control w-full max-w-xs">
                    <form onSubmit={handleSubmit}>
                      <label className="label">
                        <span className="label-text">Nombre</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                        placeholder="Ingresá tu nombre completo"
                        className="input input-bordered w-full max-w-xs"
                      />
                      {errors.name && touched.name && errors.name}
                      <label className="label">
                        <span className="label-text">Apellido</span>
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        onChange={handleChange}
                        value={values.lastname}
                        onBlur={handleBlur}
                        placeholder="Ingresá tu apellido"
                        className="input input-bordered w-full max-w-xs"
                      />
                      {errors.lastname && touched.lastname && errors.lastname}
                      <label className="label">
                        <span className="label-text">Dirección</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        onChange={handleChange}
                        value={values.address}
                        onBlur={handleBlur}
                        placeholder="Ingresá tu direcicón"
                        className="input input-bordered w-full max-w-xs"
                      />
                      {errors.address && touched.address && errors.address}
                      <label className="label">
                        <span className="label-text">Teléfono</span>
                      </label>
                      <input
                        type="number"
                        name="phone"
                        onChange={handleChange}
                        value={values.phone}
                        onBlur={handleBlur}
                        placeholder="Ingresá tu número de teléfono"
                        className="input input-bordered w-full max-w-xs"
                      />
                      {errors.phone && touched.phone && errors.phone}
                      <label className="label">
                        <span className="label-text">E-mail</span>
                      </label>
                      <input
                        type="mail"
                        name="mail"
                        onChange={handleChange}
                        values={values.mail}
                        onBlur={handleBlur}
                        placeholder="Ingresá tu correo electrónico"
                        className="input input-bordered w-full max-w-xs"
                      />
                      {errors.mail && touched.mail && errors.mail}
                      <div>
                        <button
                          disabled={!isValid || !dirty}
                          className="btn btn-primary mt-5"
                          type="submit"
                        >
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </Formik>
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
