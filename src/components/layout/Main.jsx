import React, {useState} from 'react';
import {restaurants} from "../data/mock.js"
import "../styles/Main.css"
import InfoCard from "../InfoCard.jsx"

function Main() {

    const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurants[0].id)
    const selectedRestaurant = restaurants.find(({id}) => id === selectedRestaurantId)


    function selectRestaurant(id) {

        if (selectedRestaurantId !== id) {
            setSelectedRestaurantId(id)
        }
    }

    return (
        <>
            {restaurants.length === 0 ? <div className={"main"}><h2>Все рестораны закрыты</h2></div> :
                <div className={"main"}>
                    <div className={"list"}>
                        {restaurants.map((restaurant) => (
                            <div className={"list__item"} onClick={() => selectRestaurant(restaurant.id)}
                                 key={restaurant.id}>
                                <h2>{restaurant.name}</h2>
                            </div>
                        ))
                        }
                    </div>
                    <InfoCard selectedRestaurant={selectedRestaurant}></InfoCard>
                </div>
            }</>
    );
}

export default Main;