import React, {useState} from "react";
import {restaurants} from "../data/mock.js";
import "../styles/Main.css";
import InfoCard from "../InfoCard.jsx";
import Button from "../ui/Button.jsx";


function RestaurantsPage() {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(
        restaurants[0].id,
    );
    const selectedRestaurant = restaurants.find(
        ({id}) => id === selectedRestaurantId,
    );

    function selectRestaurant(id) {
        if (selectedRestaurantId !== id) {
            setSelectedRestaurantId(id);
        }
    }

    return (
        <>

            {restaurants.length === 0 ? (
                <div className={"main"}>
                    <h2>Все рестораны закрыты</h2>
                </div>
            ) : (
                <div className={"main"}>
                    <div className={"list"}>
                        {restaurants.map((restaurant) => (
                            <Button
                                className={"list__item"}
                                onclick={() => selectRestaurant(restaurant.id)}
                                key={restaurant.id}
                                text={restaurant.name}
                            />
                        ))}
                    </div>
                    <InfoCard restaurant={selectedRestaurant}></InfoCard>
                </div>
            )}
        </>
    );
}

export default RestaurantsPage;
