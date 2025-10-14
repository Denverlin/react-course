import RestaurantsPage from "./components/layout/RestaurantsPage.jsx";
import "./components/styles/App.css";
import Layout from "./components/layout/Layout.jsx";
import React from "react";

function App() {
    return (
        <div className={"container"}>
            <Layout>
                <RestaurantsPage/>
            </Layout>
        </div>
    );
}

export default App;
