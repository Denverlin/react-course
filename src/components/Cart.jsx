import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemsIds } from "../redux/entities/cart/slice.jsx";
import CartItem from "./CartItem.jsx";

function Cart() {
  const cartIds = useSelector(selectCartItemsIds);

  return (
    <div>
      {cartIds.length === 0 ? (
        <div>Корзина пуста</div>
      ) : (
        cartIds.map((id) => <CartItem key={id} id={id} />)
      )}
    </div>
  );
}

export default Cart;
