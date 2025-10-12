
import RestaurantsPage from "./components/layout/RestaurantsPage.jsx";
import "./components/styles/App.css"
import Layout from "./components/layout/Layout.jsx";

function App() {


    return (
        <div className={"container"}>
        <Layout>
            <RestaurantsPage/>
        </Layout>
        </div>
    )
}

export default App
