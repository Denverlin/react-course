import ReviewForm from "./ReviewForm.jsx";
import DishCounter from "./DishCounter.jsx";
import { useContext } from "react";
import { AuthContext } from "./AuthContext.jsx";

function InfoCard({ restaurant }) {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      <h3>Меню</h3>

      {restaurant.menu.length === 0 ? (
        <div>
          <h2>Ресторан закрыт</h2>
        </div>
      ) : (
        <ul>
          {restaurant.menu.map((item) => (
            <li key={item.id}>
              {item.name}
              {isAuth && <DishCounter />}
            </li>
          ))}
        </ul>
      )}

      <h3>Отзывы</h3>

      {restaurant.reviews.length === 0 ? (
        <div>
          <h2>Отзывов нет</h2>
        </div>
      ) : (
        <ul>
          {restaurant.reviews.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      )}
      {isAuth && (
        <>
          <h3>Оставить отзыв</h3>
          <ReviewForm restaurantId={restaurant.id} />
        </>
      )}
    </div>
  );
}

export default InfoCard;
