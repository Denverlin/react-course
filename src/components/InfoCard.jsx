import Counter from "./Counter.jsx";

function InfoCard({selectedRestaurant}) {

    return (
        <div>
            <h3>Меню</h3>
            <ul>
                {selectedRestaurant.menu.length === 0 ?
                    <div><h2>Ресторан закрыт</h2></div> : selectedRestaurant.menu.map((item) => (
                        <li key={item.id}>{item.name}<Counter/></li>
                    ))}
            </ul>

            <h3>Отзывы</h3>
            <ul>
                {selectedRestaurant.reviews.length === 0 ?
                    <div><h2>Отзывов нет</h2></div> : selectedRestaurant.reviews.map((item) => (
                        <li key={item.id}>{item.text}</li>
                    ))}
            </ul>
        </div>
    );
}

export default InfoCard;