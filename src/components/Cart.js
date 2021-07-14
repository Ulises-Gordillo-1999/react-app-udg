import React from "react";
import { UseCart } from "../Context/CartContext";
import Button from "react-bootstrap/Button";

function Cart({ name, amount, image, id, indice }) {
  //const { cart } = UseCart();
  const { deleteItem } = UseCart();

  return (
    <tr>
      <th scope="row">{indice}</th>
      <td> {name} </td>
      <td> {amount} </td>
      <td>
        <Button variant="outline-danger"  onClick={() => deleteItem(indice)}>
          Delete item
        </Button>{" "}
      </td>
    </tr>
  );
}

export default Cart;
