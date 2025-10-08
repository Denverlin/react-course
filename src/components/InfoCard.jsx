import React from 'react';
import {restaurants} from "./data/mock.js"

function InfoCard({restaurant}) {
   
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                {restaurants[restaurant].menu.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <h3>Отзывы</h3>
            <ul>
                {restaurants[restaurant].reviews.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default InfoCard;