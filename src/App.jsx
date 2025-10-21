import RestaurantsPage from "./components/layout/RestaurantsPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import React from "react";
import { ThemeProvider } from "./components/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <RestaurantsPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
