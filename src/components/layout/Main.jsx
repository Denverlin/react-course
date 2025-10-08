import React, {useState} from 'react';
import {restaurants} from "../data/mock.js"
import "../styles/Main.css"
import InfoCard from "../InfoCard.jsx"

function Main() {

    const [selected, setSelected] = useState(0)

    function select(index) {

        if (selected != index) {
            setSelected((selected) => selected = index)
        }
    }

    return (
        <div className={"main"}>
            <div className={"list"}>
                {restaurants.map((restaurant, index) => (
                    <div className={"list__item"} onClick={() => select(index)} key={restaurant.id}>
                        <h2>{restaurant.name}</h2>
                    </div>
                ))
                }
            </div>
            <InfoCard restaurant={selected}></InfoCard>
        </div>
    );
}

export default Main;