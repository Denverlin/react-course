import {createRoot} from 'react-dom/client'
import {restaurants} from "./mock.js"


createRoot(document.getElementById('root')).render(
    <div style={{
        display: "flex",
        gap: "20px",
        justifyContent: "space-around"
    }}>

        {restaurants.map((restaurant) => (
            <div key={restaurant.id}>
                <h1>{restaurant.name}</h1>
                <h3>Меню</h3>
                {restaurant.menu.map((item) => (
                    <ul key={item.id}>
                        <li>{item.name}</li>
                    </ul>))}
                <h3>Отзывы</h3>
                {restaurant.reviews.map((item) => (
                    <ul key={item.id}>
                        <li>{item.text}</li>
                    </ul>
                ))}
            </div>
        ))
        }

    </div>
)
