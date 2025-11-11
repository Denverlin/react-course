import React from "react";
import { Link } from "react-router";
import styles from "../components/styles/Home.module.css";

function Home() {
  return (
    <div className={styles.welcomeScreen}>
      Welcome! <Link to={"/restaurants"}>To Restaurants</Link>
    </div>
  );
}

export default Home;
