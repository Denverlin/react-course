import RestaurantsPage from "./components/layout/RestaurantsPage.jsx";
import styles from "./components/styles/App.module.css"
import Layout from "./components/layout/Layout.jsx";
import React from "react";

function App() {
  return (
    <div className={styles.container}>
      <Layout>
        <RestaurantsPage />
      </Layout>
    </div>
  );
}

export default App;
