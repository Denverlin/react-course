import Counter from "./Counter.jsx";

function InfoCard({selectedRestaurant}) {

    return (
        <div>
            <h3>Меню</h3>
            <ul>
                {selectedRestaurant.menu.map((item) => (
                    <li key={item.id}>{item.name}<Counter/></li>
                ))}
            </ul>

            <h3>Отзывы</h3>
            <ul>
                {selectedRestaurant.reviews.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default InfoCard;