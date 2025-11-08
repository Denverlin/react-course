import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div
      style={{
        paddingTop: "300px",
        textAlign: "center",
        fontSize: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "300px",
      }}
    >
      Welcome! <Link to={"/restaurants"}>To Restaurants</Link>
    </div>
  );
}

export default Home;
