<h3>Меню</h3>
<ul>
{restaurant.menu.map((item) => (
<li key={item.id}>{item.name}</li>
))}
</ul>
<h3>Отзывы</h3>
<ul>
{restaurant.reviews.map((item) => (
<li key={item.id}>{item.text}</li>
))}
</ul>