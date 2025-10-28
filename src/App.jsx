import RestaurantsPage from "./components/layout/RestaurantsPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import React from "react";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.jsx";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
