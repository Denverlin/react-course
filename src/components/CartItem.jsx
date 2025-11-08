import React from "react";
import { selectDishesById } from "../redux/entities/dishes/slice.jsx";
import { useSelector } from "react-redux";
import { selectCartItemAmountById } from "../redux/entities/cart/slice.jsx";
import styles from "./styles/CartItem.module.css";

function CartItem({ id }) {
  const dish = useSelector((state) => selectDishesById(state, id));
  const dishAmount = useSelector((state) =>
    selectCartItemAmountById(state, id),
  );
  console.log(dishAmount);
  return (
    <div key={id} className={styles.cart__item}>
      <div className={styles.cart__item__name}>{dish.name}</div>
      <div className={styles.cart__item__amount}>{dishAmount}</div>
    </div>
  );
}

export default CartItem;
