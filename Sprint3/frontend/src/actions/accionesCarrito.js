import axios from "axios";
import {
  AGREGAR_ARTICULO_CARRITO,
  QUITAR_ARTICULO_CARRITO,
} from "../constantes/constantesCarrito";

export const agregarAlCarrito = (id, cant) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/productos/${id}`);

  dispatch({
    type: AGREGAR_ARTICULO_CARRITO,
    payload: {
      producto: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      cant,
    },
  });

  localStorage.setItem(
    "articulosCarrito",
    JSON.stringify(getState().carrito.articulosCarrito)
  );
};

export const removerDelCarrito = (id) => (dispatch, getState) => {
  dispatch({
    type: QUITAR_ARTICULO_CARRITO,
    payload: id,
  });

  localStorage.setItem(
    "articulosCarrito",
    JSON.stringify(getState().carrito.articulosCarrito)
  );
};
