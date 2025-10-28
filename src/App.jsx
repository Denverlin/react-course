import RestaurantsPage from "./components/layout/RestaurantsPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import React from "react";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
