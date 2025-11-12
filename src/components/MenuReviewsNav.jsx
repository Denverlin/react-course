import React from "react";
import { Link } from "react-router";
import styles from "./styles/MenuReviewsNav.module.css";

function MenuReviewsNav({ id }) {
  return (
    <div className={styles.nav}>
      <Link to={`/restaurant/${id}/menu`}>Menu</Link>
      <Link to={`/restaurant/${id}/reviews`}>Reviews</Link>
    </div>
  );
}

export default MenuReviewsNav;
