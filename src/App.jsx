import Layout from "./components/layout/Layout.jsx";
import React from "react";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import RestaurantsPage from "./pages/RestaurantsPage.jsx";
import DishCard from "./components/DishCard.jsx";
import RestaurantPage from "./components/RestaurantPage.jsx";
import MenuCard from "./components/MenuCard.jsx";
import ReviewsCard from "./components/ReviewsCard.jsx";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path={"/"} element={<Home />} />
                <Route path={"restaurants"} element={<RestaurantsPage />} />
                <Route path={"restaurant/:id"} element={<RestaurantPage />}>
                  <Route index element={<Navigate to={"menu"} />} />
                  <Route path={"menu"} element={<MenuCard />} />
                  <Route path={"reviews"} element={<ReviewsCard />} />
                </Route>
                <Route path={"/dish/:dishId"} element={<DishCard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
