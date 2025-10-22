import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ScrollProgress from "../ScrollProgress.jsx";

function Layout({ children }) {
  return (
    <>
      <ScrollProgress />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
