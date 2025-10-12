import Counter from "./Counter.jsx";

function InfoCard({restaurant}) {

    return (
        <div>
            <h3>Меню</h3>
            <ul>
                {restaurant.menu.length === 0 ?
                    <div><h2>Ресторан закрыт</h2></div> : restaurant.menu.map((item) => (
                        <li key={item.id}>{item.name}<Counter/></li>
                    ))}
            </ul>

            <h3>Отзывы</h3>
            <ul>
                {restaurant.reviews.length === 0 ?
                    <div><h2>Отзывов нет</h2></div> : restaurant.reviews.map((item) => (
                        <li key={item.id}>{item.text}</li>
                    ))}
            </ul>
        </div>
    );
}

export default InfoCard;